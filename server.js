const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3004;

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Spotlight Portfolio iskan running on http://0.0.0.0:${PORT}`);
});
