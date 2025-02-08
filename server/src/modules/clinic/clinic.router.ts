import { Router } from "express";
import { ClinicController } from "./clinic.controller";

const router = Router();

router.post(
    "/create",
    ClinicController.createClinic
)

export const ClinicRouter = router;