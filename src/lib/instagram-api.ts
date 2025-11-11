export type InstagramPost = {
  id: string;
  imageUrl: string;
  caption: string;
  permalink: string;
  timestamp: string;
};

export type InstagramFeedData = {
  posts: InstagramPost[];
  lastUpdated: string;
};

async function fetchInstagramGraphAPI(accessToken: string): Promise<InstagramPost[]> {
  try {
    const mediaResponse = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&limit=6&access_token=${accessToken}`
    );

    if (!mediaResponse.ok) {
      const errorData = await mediaResponse.json().catch(() => ({}));
      throw new Error(`Failed to fetch media: ${mediaResponse.statusText} - ${JSON.stringify(errorData)}`);
    }

    const mediaData = await mediaResponse.json();

    if (!mediaData.data || !Array.isArray(mediaData.data)) {
      throw new Error('Invalid response format from Instagram API');
    }

    return mediaData.data.map((post: any) => ({
      id: post.id,
      imageUrl: post.media_url,
      caption: post.caption || '',
      permalink: post.permalink,
      timestamp: post.timestamp,
    }));
  } catch (error) {
    console.error('Instagram Graph API Error:', error);
    throw error;
  }
}

async function fetchInstagramRapidAPI(username: string, apiKey: string, apiHost?: string): Promise<InstagramPost[]> {
  try {
    const host = apiHost || 'instagram-scraper-stable-api.p.rapidapi.com';
    const encodedUsername = encodeURIComponent(`https://www.instagram.com/${username}/`);
    
    const response = await fetch(
      `https://${host}/ig_get_fb_profile_hover.php?username_or_url=${encodedUsername}`,
      {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': host,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`RapidAPI Error: ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    
    let posts: InstagramPost[] = [];

    if (data.user_posts && Array.isArray(data.user_posts)) {
      posts = data.user_posts.slice(0, 6).map((postItem: any, index: number) => {
        const post = postItem.node || postItem;
        
        const imageUrl = post.image_versions2?.candidates?.[0]?.url || 
                        post.carousel_media?.[0]?.image_versions2?.candidates?.[0]?.url || 
                        post.image_url || 
                        post.display_url ||
                        post.thumbnail_url ||
                        '';
        
        const caption = post.edge_media_to_caption?.edges?.[0]?.node?.text ||
                       post.accessibility_caption ||
                       post.caption?.text || 
                       post.caption || 
                       post.text || 
                       '';
        
        const code = post.code || 
                    post.shortcode || 
                    '';
        
        const permalink = code ? `https://www.instagram.com/p/${code}/` : 
                         post.permalink || 
                         `https://www.instagram.com/${username}/`;
        
        const id = post.id || 
                  post.pk || 
                  code ||
                  `${post.taken_at_timestamp || Date.now()}_${index}`;
        
        return {
          id: String(id),
          imageUrl,
          caption,
          permalink,
          timestamp: post.taken_at_timestamp ? 
                    new Date(post.taken_at_timestamp * 1000).toISOString() : 
                    new Date().toISOString(),
        };
      }).filter(post => post.imageUrl && post.imageUrl.length > 0);
    } else if (data.data?.items && Array.isArray(data.data.items)) {
      posts = data.data.items.slice(0, 6).map((post: any) => ({
        id: post.pk || post.id || String(post.taken_at || Date.now()),
        imageUrl: post.image_versions2?.candidates?.[0]?.url || 
                 post.carousel_media?.[0]?.image_versions2?.candidates?.[0]?.url || 
                 post.image_url || 
                 '',
        caption: post.caption?.text || post.caption || '',
        permalink: post.permalink || `https://www.instagram.com/p/${post.code || post.shortcode || ''}/`,
        timestamp: post.timestamp || new Date((post.taken_at || Date.now() / 1000) * 1000).toISOString(),
      }));
    } else if (data.posts && Array.isArray(data.posts)) {
      posts = data.posts.slice(0, 6).map((post: any) => ({
        id: post.id || String(Date.now()),
        imageUrl: post.image_url || post.media_url || '',
        caption: post.caption || '',
        permalink: post.permalink || post.url || '',
        timestamp: post.timestamp || new Date().toISOString(),
      }));
    } else if (data.media && Array.isArray(data.media)) {
      posts = data.media.slice(0, 6).map((post: any) => ({
        id: post.id || String(Date.now()),
        imageUrl: post.display_url || post.thumbnail_src || '',
        caption: post.edge_media_to_caption?.edges?.[0]?.node?.text || '',
        permalink: `https://www.instagram.com/p/${post.shortcode}/`,
        timestamp: new Date((post.taken_at_timestamp || Date.now() / 1000) * 1000).toISOString(),
      }));
    } else {
      console.warn('Unexpected API response format:', JSON.stringify(data).substring(0, 500));
      console.warn('Available keys:', Object.keys(data));
    }

    if (posts.length === 0) {
      console.warn('No posts found in API response. Response structure:', Object.keys(data));
    }

    return posts;
  } catch (error) {
    console.error('RapidAPI Error:', error);
    throw error;
  }
}

export async function fetchInstagramPosts(): Promise<InstagramFeedData> {
  const method = process.env.INSTAGRAM_API_METHOD || 'graph'; // 'graph' or 'rapidapi'

  try {
    let posts: InstagramPost[] = [];

    if (method === 'graph') {
      const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
      if (!accessToken) {
        console.warn('INSTAGRAM_ACCESS_TOKEN not set. Skipping Instagram fetch.');
        return {
          posts: [],
          lastUpdated: new Date().toISOString(),
        };
      }
      posts = await fetchInstagramGraphAPI(accessToken);
    } else if (method === 'rapidapi') {
      const username = process.env.INSTAGRAM_USERNAME;
      const apiKey = process.env.RAPIDAPI_KEY;
      const apiHost = process.env.RAPIDAPI_HOST;
      
      if (!username || !apiKey) {
        console.warn('INSTAGRAM_USERNAME or RAPIDAPI_KEY not set. Skipping Instagram fetch.');
        return {
          posts: [],
          lastUpdated: new Date().toISOString(),
        };
      }
      posts = await fetchInstagramRapidAPI(username, apiKey, apiHost);
    } else {
      throw new Error(`Unknown API method: ${method}`);
    }

    return {
      posts,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return {
      posts: [],
      lastUpdated: new Date().toISOString(),
    };
  }
}

