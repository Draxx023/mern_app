const express = require('express');
const connectDB = require('./database/connection');
const cors = require('cors');

require('dotenv').config({ path: "./config.env" });
const PORT = process.env.PORT || 8080;

// create express instance
const app = express();
app.use(express.json());
app.use(cors());

// database connection
connectDB();

// routesß
app.use('/api', require('./router/router'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});


