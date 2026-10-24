const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.zip': 'application/zip',
  '.onepkg': 'application/octet-stream',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  let decodedUrl = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(BASE_DIR, decodedUrl === '/' ? 'index.html' : decodedUrl);
  
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      filePath = path.join(BASE_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // If downloading onepkg or zip, force download attachment header
    const headers = { 'Content-Type': contentType };
    if (ext === '.onepkg' || ext === '.zip') {
      headers['Content-Disposition'] = `attachment; filename="${path.basename(filePath)}"`;
    }

    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - Internal Server Error');
      } else {
        res.writeHead(200, headers);
        res.end(content);
      }
    });
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n======================================================`);
  console.log(`🚀 Work Command Center is running at: ${url}`);
  console.log(`📦 OneNote Downloads available at:`);
  console.log(`   - ${url}/downloads/WORK%20COMMAND%20CENTER.onepkg`);
  console.log(`   - ${url}/downloads/WORK%20COMMAND%20CENTER.zip`);
  console.log(`======================================================\n`);
  
  exec(`open ${url}`);
});
