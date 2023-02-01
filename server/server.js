const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

const defaultErr = {
  log: 'Express error handler caught unknown middleware error',
  status: 400,
  message: { err: 'An error occurred' },
};

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// catch all for unknown routes
app.all(/.*/, (req, res) => {
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT} ...`);
});
