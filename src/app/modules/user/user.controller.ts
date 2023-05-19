import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAdminUserFromDB, getUserByIdFromDB, getUserFromDB } from "./user.service";

//Request,Response আর next এগুলো আসবে express থেকে:
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const user = await createUserToDB(data);
        res.status(200).json({
            status: "success",
            message: "User post successfully",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "User post Failed",
            err: error.message,
        })
        console.log(error);
    }
}
//getUser:-
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getUserFromDB();
        res.status(200).json({
            status: "success",
            message: "User get successfully",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "User get Failed",
            err: error.message,
        })
        console.log(error);
    }
}
//get single User:-
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const user = await getUserByIdFromDB(id);
        res.status(200).json({
            status: "success",
            message: "User get successfully",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "User get Failed",
            err: error.message,
        })
        console.log(error);
    }
}
//get single User:-
export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getAdminUserFromDB();
        console.log(user);
        res.status(200).json({
            status: "success",
            message: "Admin get successfully",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Admin get Failed",
            err: error.message,
        })
        console.log(error);
    }
}