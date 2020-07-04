import mongoose from 'mongoose';

const db = {};
const Schema = mongoose.Schema;

const gradesSchema = new Schema(
  {
    name: { type: String, required: true },
    subject: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: String, required: true },
    lastModified: { type: String, required: true }
  },
  { collection: 'grades' }
);

db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grades = mongoose.model('grades', gradesSchema);

export { db };
