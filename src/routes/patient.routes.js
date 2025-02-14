import express from 'express';
import { body, validationResult } from 'express-validator';
import Patient from '../models/patient.model.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const validatePatient = [
  body('name').trim().notEmpty(),
  body('age').isInt({ min: 0 }),
  body('gender').isIn(['male', 'female', 'other']),
  body('contactNumber').trim().notEmpty(),
  body('address').trim().notEmpty()
];

// Create patient
import mongoose from 'mongoose';

router.post('/', authenticateToken, validatePatient, async (req, res) => {
  try {
    if (req.body.assignedDoctor) {
      req.body.assignedDoctor = new mongoose.Types.ObjectId(req.body.assignedDoctor);
    }

    const patient = new Patient(req.body);
    await patient.save();

    res.status(201).json(patient);
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ message: 'Error creating patient', error: error.message });
  }
});


// Get all patients
router.get('/', authenticateToken, async (req, res) => {
  try {
    const patients = await Patient.find().populate('assignedDoctor', 'name email');
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients' });
  }
});

// Get patient by ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate('assignedDoctor', 'name email');
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patient' });
  }
});

export default router;