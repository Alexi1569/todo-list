const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const { DB } = require('./config');
const userApi = require('./api/userApi');
const taskApi = require('./api/taskApi');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', userApi);
app.use('/api', taskApi);
app.use(express.static('uploads'));
app.use(express.static('./client/build'));

mongoose.connect(DB, { useNewUrlParser: true }, err => {
  console.log(err ? err : 'Database connected');
});

if (process.env.NODE_ENV === 'production') {
  const path = require('path');

  app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build/index.html'));
  });
}

app.listen({ port: PORT }, () => {
  console.log(`Server started on port ${PORT}`);
});
