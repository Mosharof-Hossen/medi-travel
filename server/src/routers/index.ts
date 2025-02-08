import { Router } from "express";
import { userRouter } from "../modules/user/user.router";
const router = Router();

const moduleRouters = [

    {
        path: "/user",
        route: userRouter,
    },

]

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;