# SpanishPro-SayItRight
GPT-powered Spanish pronunciation API. Sends Spanish text to a custom prompt and returns a beginner-friendly pronunciation guide. Part of the SpanishPro PowerTools suite.

🔖 How to Use the Bookmarklet
Copy the JavaScript Code at the bottom fo this README file.

Copy all of the code inside

Create a new browser bookmark

Paste the code into the URL field

Name it: 📣 Pronounce (SpanishPro)

Highlight Spanish text on any webpage and click the bookmarklet!



---



# 📣 SpanishPro Pronunciation API

A beginner-friendly, GPT-powered API that analyzes the pronunciation of Spanish words or sentences and returns a simplified, accessible pronunciation guide. Designed for language learners and supported by a customizable browser bookmarklet.

This tool is part of the [SpanishPro PowerTools](https://github.com/your-org/spanishpro-powertools) suite.

---

## 🚀 Features

- Breaks down Spanish words into **simplified phonetic spelling**
- Provides **English rhyming approximations**
- Includes **pronunciation tips for beginners and slow learners**
- Powered by **GPT-4o** via OpenAI's API
- Easily accessed from any webpage using a browser **bookmarklet**

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **OpenAI API**
- **dotenv** for environment variables
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

# JavaScript Code (Copy This!)

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
