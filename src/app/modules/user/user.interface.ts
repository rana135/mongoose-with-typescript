import { HydratedDocument, Model } from "mongoose";

// Create Interface:-
export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: 'male' | 'female';
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}

//static:
// interface UserModel extends Model<IUser> {
//     getAdminUsers(): IUser[];
// }

// instance methods in this interface:
export interface IUserMethods {
    fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}