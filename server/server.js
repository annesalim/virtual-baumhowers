import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
const corsOptions = {
  origin: 'http://localhost:5174', // or '*' for all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/baumhowers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const orderSchema = new mongoose.Schema({
  items: [{ name: String, price: Number }],
  createdAt: { type: Date, default: Date.now },
});

app.get('/', (req, res) => {
  res.send('Baumhowers backend is working!');
});

const Order = mongoose.model('Order', orderSchema);

// Routes
app.post('/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).send('Order saved!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving order');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
