const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Node.js Backend CI/CD Demo is working smoothly !!🚀');
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Backend is healthy'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

