import  mongoose  from "mongoose";

const userSchema= mongoose.Schema({
    name: {type:String, 
          required: true},
    email: { type: String,
            unique: true},
    birthDate: {type:Date,
                required: true}
})

export default mongoose.model('userslogins', userSchema)