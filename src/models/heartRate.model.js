import mongoose from 'mongoose';

const heartRateSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['normal', 'warning', 'critical'],
    required: true
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

export default mongoose.model('HeartRate', heartRateSchema);