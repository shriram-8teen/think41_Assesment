const express = require('express');
const router = express.Router();

// Example GET
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Think41 API!' });
});

// Add more endpoints here...

module.exports = router;
