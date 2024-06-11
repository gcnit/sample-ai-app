require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { complete } = require('./groq');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/ai', async (req, res) => {
    const response = await complete(req.body.prompt);
    res.status(200).json({ response });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
