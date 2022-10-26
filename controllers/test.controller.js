import TestModel from "../models/test.model.js";

export const create = async (req, res, next) => {
  console.log("create");
  try {
    const test = await TestModel.save(...req.body);
    res.status(200).json(test);
  } catch (error) {
    next(error);
  }
};

export const get = async (req, res, next) => {
  try {
    await TestModel.find();
    res.status(200).json("test is done");
  } catch (error) {
    next(error);
  }
};
