const mongoose = require('mongoose');

//create a schema
const userschema = new mongoose.Schema({
    firstname: {
        type: String,
        required:[true, 'first Name is required']
    },
      lastname: {
        type: String,
        required:[true, 'last Name is required']
    },
    profilePhoto: {
        type: String,
    },
    email: {
        type: String,
        required:[true, 'email is required']
    },
    password: {
        type: String,
        required:[true, 'password is required']
    },
    postCount: {
        type: Number,
        default: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["Admin", "Guest", "Editor"],
    },
    viewedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
],
followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
},
],
following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
},
],
active: {
    type: Boolean,
    default: true,
},
post : [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
    },
],
},
{
    timestamps: true,
}
);


//compile the user model
const User = mongoose.model('User', userschema);

module.exports = User;
