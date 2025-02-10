import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logout, TUser, useCurrentToken } from "../redux/services/auth/authSlice";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"

type TPrivateRoute = {
    role: string | undefined,
    children: ReactNode
}

const PrivateRouter = ({ children, role }: TPrivateRoute) => {
    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();
    let user;
    if (token) {
        user = jwtDecode(token) as TUser;
    }

    if ( user?.role != role) {
        dispatch(logout());
        return <Navigate to={"/login"} replace={true}></Navigate>
    }

    console.log({ user, role });

    return children
}

export default PrivateRouter;