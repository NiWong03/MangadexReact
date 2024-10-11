const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));

// Logging middleware to track requests
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Proxy middleware for MangaDex API
app.use('/api', createProxyMiddleware({
  target: 'https://api.mangadex.org',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
}));

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the MangaDex Proxy Server!');
});

// Define the port to listen on
const PORT = 3000;

// Start the server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

// Set the keep-alive timeout
server.keepAliveTimeout = 60000; // 60 seconds
