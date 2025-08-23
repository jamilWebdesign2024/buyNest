'use server'
import dbConnect, { collectionName } from "@/lib/dbConnect";
import bcrypt from "bcrypt"


export const loginUser = async (payload) => {
    const { email, password } = payload;
    const usersCollection = dbConnect(collectionName.USERS);
    const user = await usersCollection.findOne({ email })
    if (!user) return null;
    // console.log(user.email);

    // Check password from DB
    const isPasswordOK = await bcrypt.compare(password, user.password);
    if (!isPasswordOK) return null;
    return user;
}