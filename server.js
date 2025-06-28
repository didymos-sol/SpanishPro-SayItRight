const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pronounceRoute = require('./routes/pronounce');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/pronounce', pronounceRoute);

app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
