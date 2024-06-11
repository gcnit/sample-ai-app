require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { complete } = require('./groq');

if (!process.env.GROQ_API_KEY) {
  throw new Error('GROQ_API_KEY is missing. Add your key to .env file');
}

const app = express();

app.use(express.json());
app.use(cors());

app.post('/ai', async (req, res) => {
    try {
        const response = await complete(req.body.prompt);
        res.status(200).json({ response });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
