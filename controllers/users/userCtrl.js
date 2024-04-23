const bcrypt = require('bcryptjs');
const User = require("../../model/User/User");
const generateToken = require('../../utils/generateToken');

//Register
const userRegisterCtrl = async (req, res) => {
    const { firstname,lastname,email,password } = req.body;
    try {
        //check if email exist
        const userFound = await User.findOne({email});
      if (userFound){
        return res.json({
            msg: 'User Already Exist'
        })
      }
        //hash password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

        //create the user
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });
        res.json({
            status: "success", 
            data: user,
        });
       } catch (error) {
        res.json(error.message);
       }
};

//login
const userLoginCtrl = async (req, res) => {
    const {email, password} = req.body;
    try {
        //check if email exist
        const userFound = await User.findOne({ email });
        if(!userFound) {
            return res.json({
                msg: "Invalid login credentials"
            });
        }
        //verify password
        const isPasswordMatched = await bcrypt.compare(password, userFound.password);

        if(!isPasswordMatched) {
            return res.json({
                msg: "Invalid login credentials"
            });
        }
    const token = generateToken;
        res.json({
            status: "success",
            data: {
                firstname: userFound.firstname,
                lastname: userFound.lastname,
                email: userFound.email,
                isAdmin: userFound.isAdmin,
                token: generateToken(userFound._id)
            },
        });
       } catch (error) {
        res.json(error.message);
       }
};

//all
 const userCtrl = async (req, res) => {
     try {
         res.json({
             status: "success",
             data: "all user route",
         });
        } catch (error) {
         res.json(error.message);
        }
 };

//profile
const userProfileCtrl = async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findById(id);
        res.json({
            status: "success",
            data: "user",
        });
       } catch (error) {
        res.json(error.message);
       }
};


//delete
 const userDeleteCtrl = async (req, res) => {
     try {
         res.json({
             status: "success",
             data: "delete user route",
         });
        } catch (error) {
         res.json(error.message);
        }
 };

//update
 const updateUserCtrl = async (req, res) => {
     try {
         res.json({
             status: "success",
             data: "update user route",
         });
        } catch (error) {
         res.json(error.message);
        }
 };


module.exports = {
    userRegisterCtrl,
    userLoginCtrl,
    userCtrl,
    userProfileCtrl,
    userDeleteCtrl,
    updateUserCtrl,
};