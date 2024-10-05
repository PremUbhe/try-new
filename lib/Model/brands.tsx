import mongoose, {Schema, Document} from "mongoose";


interface brands extends Document {
    // brandId : number;
    name: string;
}

const brandsModel : Schema<brands> = new Schema({
    // brandId : {
    //     type : Number,
    //     required : [true, "Brand id is required"],
    //     unique : true,
    // },
    name : {
        type : String,
    }
})

export const brands = (mongoose.models.brands as mongoose.Model<brands>)  || mongoose.model<brands>("brands", brandsModel)