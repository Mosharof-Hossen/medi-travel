import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ClinicServices } from "./clinic.service";
import { sendResponse } from "../../utils/sendResponse";

const createClinic = catchAsync(async (req: Request, res: Response) => {
    const clinicData = req.body;
    const result = await ClinicServices.createClinicIntoDB(clinicData);
    sendResponse(res, {
        data: result,
        message: 'Clinic Created successfully',
        statusCode: 200,
        success: true,
        meta: null
    })
})


const getClinics = catchAsync(async (req: Request, res: Response) => {
    const result = await ClinicServices.getAllClinicsFromDB();
    sendResponse(res, {
        data: result,
        message: 'All Clinics',
        statusCode: 200,
        success: true,
        meta: null
    })
})
const singleClinic = catchAsync(async (req: Request, res: Response) => {
    const result = await ClinicServices.getSingleClinicsFromDB(req.params.id);
    sendResponse(res, {
        data: result,
        message: 'Single Clinic Clinics',
        statusCode: 200,
        success: true,
        meta: null
    })
})

export const ClinicController = {
    createClinic,
    getClinics,
    singleClinic
}