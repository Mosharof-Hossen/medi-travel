import mongoose, { Schema } from "mongoose";
import { TClinic, TServices } from "./clinic.interface";

const ServiceSchema = new Schema<TServices>({
    procedure: { type: String, required: true },
    price: { type: Number, required: true },
});

const ClinicSchema = new Schema<TClinic>({
    clinicName: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    image: { type: String, required: true },
    services: { type: [ServiceSchema], required: true },
    estimatedCost: { type: Number, required: true },
    usAverageCost: { type: Number, required: true },
    savings: { type: Number, required: true },
    notes: { type: String, required: false },
});

export const Clinic = mongoose.model<TClinic>("Clinic", ClinicSchema);