const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Allow Heroku to set the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`App listening on port ${port}`);
});
