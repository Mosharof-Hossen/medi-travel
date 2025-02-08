import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

router.post(
    "/sign-up",
    UserControllers.userSignUp
)

export const userRouter = router;