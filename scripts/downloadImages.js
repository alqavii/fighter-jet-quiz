const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Fighter jet image URLs (using placeholder URLs - you'll need to replace these with actual image URLs)
// These are example URLs - in production, you'd want to use actual image sources
const jetImages = {
  'f-15': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/F-15_Eagle_%28cropped%29.jpg/800px-F-15_Eagle_%28cropped%29.jpg',
  'f-16': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/F-16_June_2008.jpg/800px-F-16_June_2008.jpg',
  'f-14': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/F-14_Tomcat_VF-31.jpg/800px-F-14_Tomcat_VF-31.jpg',
  'f-18': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/F-18_Hornet_side_view.jpg/800px-F-18_Hornet_side_view.jpg',
  'a-10': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/A-10_Thunderbolt_II_in_flight.jpg/800px-A-10_Thunderbolt_II_in_flight.jpg',
  // Add more URLs as needed
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        return downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  const outputDir = path.join(process.cwd(), 'public', 'jets', 'original');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Downloading fighter jet images...\n');
  
  for (const [jetId, url] of Object.entries(jetImages)) {
    const filepath = path.join(outputDir, `${jetId}.jpg`);
    
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`⊘ Skipped (exists): ${jetId}.jpg`);
      continue;
    }
    
    try {
      await downloadImage(url, filepath);
    } catch (error) {
      console.error(`✗ Error downloading ${jetId}:`, error.message);
    }
  }
  
  console.log('\n✓ Download complete!');
  console.log('Run: npm run convert-silhouettes to convert images to silhouettes');
}

downloadAllImages().catch(console.error);

