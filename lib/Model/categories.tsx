import mongoose, {Schema, Document} from "mongoose";


interface categories extends Document {
    name: string;
    // img: string;
}

const categoriesModel : Schema<categories> = new Schema({
    name : {
        type : String,
        required : [true, "Categorie name is requried"],
        unique: true,
    },
    // img : {
    //     type: String,
    //     required : [true, "Categorie img is requried"],
    // },
})

export const categories = (mongoose.models.categories as mongoose.Model<categories>)  || mongoose.model<categories>("categories", categoriesModel)