const https = require('https');

https.get('https://www.emcocal.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/href="([^"]+)"/gi);
    if (matches) {
      const urls = [...new Set(matches.map(m => m.replace(/href="([^"]+)"/i, '$1')))];
      urls.filter(u => u.includes('caddo') || u.includes('traveler') || u.includes('kokanee') || u.includes('2526') || u.includes('apf-190t')).forEach(u => console.log(u));
    }
  });
});
