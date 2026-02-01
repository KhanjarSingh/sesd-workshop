import mongoose, { Schema, Document } from 'mongoose';

export interface Student extends Document {
    name: string;
    email: string;
    age: number;
    grade: string;
}

const StudentSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<Student>('Student', StudentSchema);
