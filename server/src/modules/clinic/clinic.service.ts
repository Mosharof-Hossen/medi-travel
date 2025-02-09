import { TClinic } from "./clinic.interface";
import { Clinic } from "./clinic.model";

const createClinicIntoDB = async (payload: TClinic) => {
    const result = await Clinic.create(payload);
    return result;
}
const getAllClinicsFromDB = async () => {
    const result = await Clinic.find();
    return result;
}
const getSingleClinicsFromDB = async (payload: string) => {
    const result = await Clinic.findById(payload);
    return result;
}

export const ClinicServices = {
    createClinicIntoDB,
    getAllClinicsFromDB,
    getSingleClinicsFromDB
}