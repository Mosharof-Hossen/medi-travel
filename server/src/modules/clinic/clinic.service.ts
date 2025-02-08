import { TClinic } from "./clinic.interface";
import { Clinic } from "./clinic.model";

const createClinicIntoDB = async (payload: TClinic) => {
    const result = await Clinic.create(payload);
    return result;
}

export const ClinicServices = {
    createClinicIntoDB
}