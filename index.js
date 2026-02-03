const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    service: 'local-application-ci-cd-10',
    timestamp: new Date().toISOString()
  });
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to local-application-ci-cd-10!',
    description: 'local-application-ci-cd-10',
    version: '1.0.0'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📝 Service: local-application-ci-cd-10`);
  console.log(`✅ Health check: http://localhost:${PORT}/health`);
});

module.exports = app;

