const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log(`[${new Date().toISOString()}] Request received`
  res.send('Aegon ii true king\n');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
