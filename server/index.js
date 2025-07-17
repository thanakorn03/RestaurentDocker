import express from 'express';
import restaurentsRoutes from './Routes/restaurentsRoutes.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

// Find the directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Try to load .env from current dir, then parent dir
dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
  origin: ["http://localhost:5173", "127.0.0.1:5173"], // Allow all origins, adjust as needed
  methods: 'GET,POST,PUT,DELETE', // Allow specific methods
  allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
}));

app.get('/', (req, res) => {
  res.send('Restaurant Useful API 555')
})
//http://localhost:5000/api/v1/restaurants
app.use('/api/v1/restaurants', restaurentsRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});