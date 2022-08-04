import Data from "../entities/model";
import { ObjectId } from 'mongodb';



export const createData = async ( image : string , helmet :  Boolean, vest: Boolean, timestamp: Date, zone : Number, camera: string, created_at: Date, updated_at: Date) => {
    const result = await Data.create({image,helmet,vest,timestamp,zone,camera,created_at, updated_at});
    return result.save();
  };

  export const getDataById = async (_id: ObjectId) => {
    const result = await Data.findById(_id);
    return result;
  };

  export const getAllData = async () => {
    const result = await Data.find();
    return result;
  };

 
  export const deleteData = async (_id: ObjectId) => {
    const result = await Data.findByIdAndDelete(_id);
    return result;
  };

  export const UpdateData = async (id: ObjectId ,obj : Boolean) => {
    const result = await Data.updateOne({ _id: id }, { $set : {vest:obj} },{new:true});
    return result;
  };


  