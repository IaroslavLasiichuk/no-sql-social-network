const express = require('express');
const db = require('./config/connection');
// const routes = require('./routes');

const PORT = 3005;
const app = express();

app.use(express.json());
// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
});