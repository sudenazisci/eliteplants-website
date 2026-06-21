const https = require('https');
const fs = require('fs');

const urls = [
  'https://www.emcocal.com/caddo-a-2428t/',
  'https://www.emcocal.com/traveler-apf-190t-cv/',
  'https://www.emcocal.com/kokanee-cv/'
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrape() {
  let results = '';
  for (const url of urls) {
    try {
      const html = await fetchUrl(url);
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) {
        let text = bodyMatch[1]
          .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '')
          .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ');
        // Extract the relevant part starting from "Attributes"
        const attrIndex = text.indexOf('Attributes');
        if (attrIndex !== -1) {
          text = text.substring(attrIndex, attrIndex + 2000);
        } else {
          text = text.substring(0, 1000); // fallback
        }
        results += `\n\n--- URL: ${url} ---\n${text}`;
      }
    } catch (e) {
      results += `\n\n--- URL: ${url} FAILED ---`;
    }
  }
  fs.writeFileSync('scrape_results.txt', results);
  console.log('Done writing to scrape_results.txt');
}

scrape();
