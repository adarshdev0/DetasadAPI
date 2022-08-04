import mongoose, {Document, Schema} from "mongoose";

export interface ISample{
   
    image : String;
    helmet : Boolean;
    vest : Boolean;
    timestamp : Date;
    zone : Number;
    camera : string;
    created_at : Date;
    updated_at : Date;
}

export interface ISampleModel extends ISample, Document {}

const SampleSchema: Schema = new Schema(
    {
        

        image: { type : String},
        
        helmet: { type : Boolean},
           
        vest: { type : Boolean},

        timestamp : { type : Date, default: Date.now},
        
        zone : { type : Number},

        camera : { type : String},

         created_at : { type : Date, default: Date.now },

         updated_at : { type : Date, default: Date.now }


    },
    {
        versionKey: false
    }
);

export default mongoose.model<ISample>('Sample', SampleSchema);