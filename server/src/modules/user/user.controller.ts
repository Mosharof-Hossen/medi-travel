import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.services";

const userSignUp = catchAsync(async (req, res) => {
    const result = await UserServices.createUserIntoDB(req.body);
    sendResponse(res, {
        data: result,
        message: "Signup Successfully done.",
        statusCode: 200,
        success: true,
    })
})


export const UserControllers = {
    userSignUp
}