const express = require('express');
const dotenv = require('dotenv');
const pollRoutes = require('./routes/polls');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/polls', pollRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
