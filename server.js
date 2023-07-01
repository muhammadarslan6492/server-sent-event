import express from 'express';

const app = express();
const port = 3000;

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  send(res);
});

let i = 0;
function send(res) {
  res.write(`data: hello from server------[${i++}]\n\n`);

  setTimeout(() => send(res), 1000);
}

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
