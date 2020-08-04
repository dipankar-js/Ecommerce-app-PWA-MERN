const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

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

// Server static assets if in Production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(client / build));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
