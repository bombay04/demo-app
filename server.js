const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] Request received: ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Savadeeja from demo-app! [FEATURE VERSION] Time: ${new Date().toLocaleString()}\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
