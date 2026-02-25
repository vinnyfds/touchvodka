import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || ['http://localhost:3002', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api', contactRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

// 404 handler
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
  });
});

app.listen(PORT, () => {
  console.log(`📧 Contact form server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
