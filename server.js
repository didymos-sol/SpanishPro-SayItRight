const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pronounceRoute = require('./routes/pronounce');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// 🔧 FULL CORS SETUP
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// 🛡️ Ensure preflight requests are handled
app.options('*', cors());

app.use(express.json());
app.use('/pronounce', pronounceRoute);

app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
