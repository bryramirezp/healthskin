import { config } from 'dotenv';
import { fetchInstagramPosts } from '../src/lib/instagram-api';
import { writeFileSync } from 'fs';
import { join } from 'path';

config();

async function main() {
  console.log('Fetching Instagram posts...');
  console.log('Method:', process.env.INSTAGRAM_API_METHOD || 'graph');
  console.log('Username:', process.env.INSTAGRAM_USERNAME || 'not set');
  
  try {
    const data = await fetchInstagramPosts();
    
    const outputPath = join(process.cwd(), 'src/lib/instagram-posts.json');
    writeFileSync(outputPath, JSON.stringify(data, null, 2));
    
    console.log(`✅ Successfully fetched ${data.posts.length} Instagram posts`);
    console.log(`📁 Saved to: ${outputPath}`);
    
    if (data.posts.length === 0) {
      console.warn('⚠️  No posts were fetched. Check your API configuration and credentials.');
    }
  } catch (error) {
    console.error('❌ Error fetching Instagram posts:', error);
    process.exit(1);
  }
}

main();

