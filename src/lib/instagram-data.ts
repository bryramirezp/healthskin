import instagramData from './instagram-posts.json';
import type { InstagramFeedData } from './instagram-api';

export function getInstagramPosts(): InstagramFeedData {
  return instagramData as InstagramFeedData;
}

