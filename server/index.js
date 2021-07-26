const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

// if dev mode
app.use(cors());
app.options('*', cors());

// routes
require('./route')(app);

app.listen(port, () => {
  console.log(`server listening to http://localhost:${port}`);
});
