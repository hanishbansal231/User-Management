const User = require('../module/User');

exports.userRegister = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        const createUser = await User.create({name,email,password});
        return res.status(200).json({
            success: true,
            data: createUser,
            message: 'User is Successfully sign Up...',
        })
    }catch(err){
        console.error(err);
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}