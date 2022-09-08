import UserModel from "../models/user.model"

export const createUser= async ({name,address,age,isMarried})=>{

    if(!name){
        return {message:"no username", status:"error"}
    }

    const preexisting= await UserModel.find({name});
    if(preexisting.length){
        return {message:"user already exists", status:"error"}
    }

    const user= new UserModel({
        name,
        address,
        age,
        isMarried
      })
     await user.save();

     return {message:"sign in sucesss", status:"done"}

}