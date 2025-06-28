const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/', async (req, res) => {
  const userInput = req.body.text;

  const prompt = `
You are a Spanish pronunciation coach and accessibility expert.
When I give you a Spanish word or sentence, return a clear and beginner-friendly pronunciation guide in the following format:

📘 Original: \`${userInput}\`

🗣️ Simplified Phonetic Spelling (by word):
[Provide each word’s phonetic breakdown like ko-ra-SON]

🎵 English Rhyming Approximation:
[Show rhyming cues for each word, like koh-rah-SOHN (rhymes with “own”)]

💡 Pronunciation Notes:
- For each word, give simple, beginner-friendly tips on tricky sounds
- Always capitalize the stressed syllable
- Explain sounds like 'll', 'r', 'y', and vowel purity
- Avoid IPA. Be friendly, clear, and supportive. Use accessible examples.

For full sentences, return breakdown **per word** first, then a sentence-level guide.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }]
    });

    const result = completion.choices[0].message.content;
    res.send({ result });
  } catch (err) {
    console.error("OpenAI error:", err.message);
    res.status(500).send({ error: "Failed to generate pronunciation guide." });
  }
});

module.exports = router;
