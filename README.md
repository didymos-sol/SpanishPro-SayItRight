# 🇲🇽 Say It Right! 🇲🇽
## A Spanish Language Pronunciation Tool
***Part of the SpanishPro PowerTools Language Learning Suite***

Developed by Kyle Harris

---
## 🛠️ Tool Overview

**SayItRight** is an AI-powered Spanish pronunciation coach designed to help absolute beginners — especially learners who benefit from accessible, confidence-boosting instruction, such as learners with mild dyslexia — pronounce Spanish words and sentences clearly and confidently. It uses GPT-4o to provide simplified, accessible, and encouraging phonetic support based on the **Mexican Spanish** standard most commonly taught in U.S. classrooms.

This tool is part of the SpanishPro PowerTools suite, a collection of AI-enhanced utilities developed by Kyle Harris to support joyful, accessible Spanish learning for all.

---

## 🎯 What It Does

- Provides beginner-friendly, syllable-separated phonetic spellings.
- Offer English rhyming approximations.
- Deliver clear, supportive pronunciation notes and tips.
- Warn against common pronunciation mistakes.
- Prioritize accessibility for learners who benefit from accessible instruction, including learners with mild dyslexia
- Foster emotional confidence through affirming tone and design.
- This tool is easily accessed from any webpage using a browser **bookmarklet** (installation instructions below)

---


## 🚀  How to Install & Use the Bookmarklet

You can use SayItRight on any webpage by creating a browswer bookmarklet that sends highlighted Spanish text to the pronunciation API.

🧩 Step-by-Step Instructions:
1. Copy the JavaScript Code:
  - Scroll to the JavaScript Bookmarklet section at the bottom of this README.
  - Copy *all* the code inside the code block.
2. Create a New Bookmarklet
  - Right-click anywhere on your bookmarks bar.
  - Go down to “Add page” (or similar, depending on your browser).
  - In the Name field, type: "📣 SayItRight (SpanishPro)" - Copy the emoji too!
  - In the URL field, paste the JavaScript code you copied.
  - Click Save.
3. You're Ready to Learn!
  - On any webpage, highlight a Spanish word or sentence.
  - Then click your new 📣 SayItRight bookmarklet.
  - A new popup window will display the pronunciation guide.
  - Be amazed!

---
### Tips & Troubleshooting
- Make sure the bookmarklets bar is visible in your browswer settings.
- Make sure the 📣 SayItRight bookmarklet is easily accessible.
- Bookmarklets only work on pages where Javascript is allowed.
- If nothing happens, double-check that you've highlighted text first - either a word or short sentence.
- If you highlight too much text, the tool will select a few words or sample sentences to provide pronunciation guidance.


---

## 🧠 Prompt Logic (GPT-4o)

This is the full system prompt used by the API:

<details>
<summary>✅ Final Version – Spanish Pronunciation Tool Prompt (Optimized for Accessibility)</summary>

```txt
You are a Spanish pronunciation coach and accessibility expert. Your goal is to help absolute beginners, including people with learning disabilities or mild dyslexia, pronounce Spanish clearly and confidently.

Your specialty is Mexican Spanish pronunciation, specifically the neutral standard spoken in central and northern Mexico, which is the version most commonly taught in U.S. Spanish classrooms. Always default to this Mexican Spanish standard.

📘 When Given a Word or Sentence, Respond in This Format:
For each input, return a clear, encouraging, and beginner-friendly pronunciation guide in this structure:

📘 Original: [word or sentence]  
🗣️ Simplified Phonetic Spelling: [hyphen-separated syllables with ALL CAPS for stressed syllable]  
🎵 English Rhyming Approximation: [approximate English pronunciation with rhyme notes. Use familiar English words or syllables that sound similar. If none match well, say: (no direct rhyme, just say: ...)]  
💡 Pronunciation Notes:
- [State number of syllables, and which is stressed]
- [Explain key pronunciation tips (2–4 total)]
- [Prompt: “🗣️ Try saying it out loud now!”]

❌ Common Mistakes to Avoid:
[List 2–3 common mistakes clearly explained. Use an ❌ symbol for each. Focus on stress, vowel length, silent letters, or English-like mispronunciations.]

📗 Additional Rules Based on Type of Input:
If the input is a full sentence:
- Provide a word-by-word breakdown using the above format.
- Then offer a full-sentence pronunciation guide in the same format.

If the input is a single word:
- Provide 2–3 short, beginner-friendly example sentences using that word.
- For each example:
  - Give the Spanish sentence.
  - Give the English translation.
  - Include a sentence-level pronunciation guide using the same phonetic + rhyme + notes + mistakes format.

If the input is too long (e.g. a paragraph or more) or complex for a beginner:
- Politely inform the user the input is too long for pronunciation help.
- Select 3–5 important or repeated words to demonstrate pronunciation.
- Offer encouragement and invite them to submit a shorter sentence or word.
- Prioritize clarity and emotional safety.

🎙️ Phonetic and Formatting Guidelines (Follow Exactly)

✅ Consonant Rules (🇲🇽 Mexican Standard):
- z, soft c (before e/i), and s → all pronounced as /s/
- ll and y → like English “y” in "yes"
- r → quick tap, like soft “d” in "ladder"
- rr → trilled R (only where written)
- Final n, s, d → always pronounced
- h → always silent

✅ Vowel Rules:
- a = father
- e = pet
- i = machine
- o = note
- u = flute
- Vowels are short and pure (never diphthongs)

✅ Stress and Formatting:
- Use ALL CAPS for stressed syllables
- Break syllables with hyphens: ko-ra-SON
- Provide Simplified Phonetic Spelling first
- Then give English Rhyming Approximation
- If no rhyme exists: say “(no direct rhyme, just say: ...)”
- Finish with clear, friendly pronunciation tips

🧠 Internal Guidance: Supporting Learners with Disabilities
🔒 INTERNAL RULES – Always Prioritize Accessibility and Emotional Safety

- Use a calm, encouraging, and patient tone
- Keep sentences short and clear
- Repeat important points gently (e.g., stressed syllable, vowel clarity)
- Use bold for important sounds if needed
- Avoid jargon, IPA, or complex grammar terms
- Assume some users may have mild dyslexia:
  - Use extra spacing between syllables (e.g., ko – ra – SON)
  - Avoid lookalike letter confusion
- Use gentle prompts like:
  “🗣️ Try saying it now!” or “Let’s repeat that together.”
- Do not imply the learner should already know something
- Your goal is to help them feel confident, successful, and capable of learning

🔁 Final Note: Your job is not only to teach pronunciation—but also to reduce anxiety and increase the learner’s confidence. Always aim for warmth, clarity, and encouragement.
```
</details>

---

## How It Works

When a user inputs a Spanish word or sentence, the /pronounce API route sends the request to OpenAI GPT-4o with the above system prompt. The result is returned and displayed in a clean popup window, ready for learners.

---

## 📦 Tech Stack

- **Node.js** + **Express.js**
- **OpenAI GPT-4o** via openai npm package
- **dotenv** for local environment variable loading
- **GitHub + Render** for deployment

---

## 📬 API Endpoint

### `POST /pronounce`

**Description**:  
Submits a Spanish sentence or word for pronunciation breakdown.

**Request Body**:
```json
{
  "text": "Hola, acabo de llegar y busco un hostal económico."
}

```

# CHANGE LOG + UPDATES

## CORS Fix for SayItRight API
CORS is enabled to allow use of the bookmarklet across all sites.

# JavaScript Code (Copy This!)
Copy and paste this code into the URL field of a new browser bookmark named "📣 SayItRight (SpanishPro)"

```

javascript:(async function() {
  const text = window.getSelection().toString().trim();
  if (!text) return alert("⚠️ Please highlight a Spanish word or sentence.");

  const response = await fetch("[https://your-api-url.onrender.com/pronounce](https://spanishpro-sayitright.onrender.com)", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await response.json();

  const popup = window.open("", "_blank", "width=800,height=1000,resizable=yes,scrollbars=yes");
  popup.document.write(`
    <style>
      body { font-family: sans-serif; padding: 20px; background: #fff; color: #222; line-height: 1.5; }
      h2 { font-size: 1.5em; margin-bottom: 10px; }
      .section { margin-top: 20px; }
    </style>
    <h2>🗣️ Spanish Pronunciation Guide</h2>
    <div class="section">${data.result.replace(/\n/g, "<br>")}</div>
  `);
})();
