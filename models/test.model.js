import mongoose from "mongoose";

const testSchema = mongoose.Schema({
    name:{
        type:String
    }
})

const TestModel = mongoose.model("Test",testSchema)

export default TestModel