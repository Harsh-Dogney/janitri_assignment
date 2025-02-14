import express from 'express';
import { body, validationResult } from 'express-validator';
import HeartRate from '../models/heartRate.model.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const validateHeartRate = [
  body('value').isFloat({ min: 0 }),
  body('patient').isMongoId(),
  body('status').isIn(['normal', 'warning', 'critical'])
];

// Record heart rate
router.post('/', authenticateToken, validateHeartRate, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const heartRate = new HeartRate(req.body);
    await heartRate.save();

    res.status(201).json(heartRate);
  } catch (error) {
    res.status(500).json({ message: 'Error recording heart rate' });
  }
});

// Get heart rate records for a patient
router.get('/patient/:patientId', authenticateToken, async (req, res) => {
  try {
    const heartRates = await HeartRate.find({ patient: req.params.patientId })
      .sort({ timestamp: -1 })
      .populate('patient', 'name');
    res.json(heartRates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching heart rate records' });
  }
});

export default router;