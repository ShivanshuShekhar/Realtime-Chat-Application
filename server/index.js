const express = require('express');
const cors = require('cors');
const morgan = require("morgan")
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));