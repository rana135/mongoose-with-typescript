import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;

//creating schema using interface:schema তৈরীর সময় type কে capital letter দিয়ে দিতে হবে।
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    dateOfBirth: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    email: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
});

//static: এখানের this দ্বারা class কে mean করতেছে।
userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({role:"admin"});
    // console.log(admins);
    return admins;
});

//instance এর জন্য ব্যবহৃত:
userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
});

// 3. Create a Model.
const User = model<IUser, UserModel>('User', userSchema); //model এর ভিতরে প্রথমেই model এর নাম then সেই schema ।
export default User;