import UserModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { createError } from "../helpers/error.js"
import jwt from "jsonwebtoken"


export const register = async (req,res,next)=>{
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password,salt)

    const newUser = new UserModel({
        ...req.body,
        password:hash
    })

    await newUser.save()
    res.status(200).json("User has been created.")
  } catch (error) {
    next(error)
  }
}

export const login = async (req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}