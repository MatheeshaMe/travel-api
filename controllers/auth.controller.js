import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../helpers/error.js";
import jwt from "jsonwebtoken";


export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);

    const newUser = new UserModel({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).json("User has been created.");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  console.log("line 24");
  console.log(req.body.name);
  console.log(req.body.password);
  try {
    const user = await UserModel.findOne({
      name: req.body.name,
    }).lean();

    console.log("line 30");

    if (!user) return next(createError(404, "user not found"));

    console.log(req.body.password, user.password);
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log("line 37", isPasswordCorrect);
    if (!isPasswordCorrect) {
      return next(createError(400), "Wrong password or username!");
    }
    console.log("line 41");
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT
    );
    const {__v, _id, password, isAdmin, ...other } = user;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ name: user.name, isAdmin, ...other }); //{ details: { ...otherdetails }, isAdmin }
    next();
  } catch (error) {
    next(error);
  }
};
