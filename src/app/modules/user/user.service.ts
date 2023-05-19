import { IUser } from "./user.interface";
import User from "./user.model";

//Database Query:schema structure maintain করে করতে হবে:
export const createUserToDB = async (payload: IUser):Promise<IUser> => {
    const user = new User(payload);  //User-->Class & user-->instance
    await user.save();  //user(instance)এর সাথে save() method একসাথে হয়ে instance method হয়ে গেছে।
    console.log(user.fullName());  //Output: mr pars
    // user.fullName()  //custom instance
    return user;
}

//get method:
export const getUserFromDB = async () :Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

//get single method: payload এর মধ্যে যেহেতু id(string) আসবে আর তা হয়তো Iuser আর কিছু না থাকলে null:
export const getUserByIdFromDB = async (payload:string) :Promise<IUser | null> => {
    const user = await User.findOne({id:payload},{name:1});
    return user;
}

//instance
export const getAdminUserFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}