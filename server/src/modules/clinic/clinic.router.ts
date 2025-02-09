import { Router } from "express";
import { ClinicController } from "./clinic.controller";
// import auth from "../../middlewares/auth";
// import { USER_ROLE } from "../../types/global";

const router = Router();

router.post(
    "/create",
    // auth(USER_ROLE.admin),
    ClinicController.createClinic
)

router.get(
    "/clinics",
    ClinicController.getClinics
)
router.get(
    "/details/:id",
    ClinicController.singleClinic
)

export const ClinicRouter = router;