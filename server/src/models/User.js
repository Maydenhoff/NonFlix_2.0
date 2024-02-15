const moongose = require("moongose")

const Schema = moongose.Schema
const userSchema = new Schema({
    name: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    veryficationCode: String,
    veryficationCodeExpiration: String,
    isVerified: {
        type: Boolean,
        default: False
    }
    
})

const User = moongose.model("User", userSchema)

module.exports = User