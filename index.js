const express = require('express');
const app = express();
const port = 3000;
const node_media_server = require('./server/media_server');

app.get('/helloworld', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});

node_media_server.run();