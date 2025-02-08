import { Router } from "express";
import { userRouter } from "../modules/user/user.router";
import { authRouter } from "../modules/auth/auth.route";
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

]

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;