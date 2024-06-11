const Groq = require('groq-sdk');

const groq = new Groq();
async function complete(prompt) {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "user",
        "content": prompt
      }
    ],
    "model": "llama3-70b-8192",
    "temperature": 0,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": false,
    "stop": null
  });

  return chatCompletion.choices[0].message.content;
}

module.exports = {
  complete,
};
