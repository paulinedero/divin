const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());

// if dev mode
app.use(cors());

// routes
require('./route')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
