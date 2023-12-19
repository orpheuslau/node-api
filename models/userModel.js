const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
{
    username:{
        type: String,
        required: [true,"Please enter a user name"]
            },
    password:{
                type: String,
                required: true,
                       }
   
},
{
    timestamps: true
}
)

const User = mongoose.model('User', userSchema);

module.exports = User;