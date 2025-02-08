import { Router } from "express";
import { userRouter } from "../modules/user/user.router";
import { authRouter } from "../modules/auth/auth.route";
import { ClinicRouter } from "../modules/clinic/clinic.router";
const router = Router();

const moduleRouters = [

    {
        path: "/user",
        route: userRouter,
    },
    {
        path: "/auth",
        route: authRouter,
    },
    {
        path: "/clinic",
        route: ClinicRouter,
    },

]

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;