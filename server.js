const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser
app.use(express.json());

app.use(cors());

// Connect to database
connectDB();

// Route files
const product = require('./routes/product');
const order = require('./routes/order');

// Mount routes
app.use('/api/products', product);
app.use('/api/orders', order);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
