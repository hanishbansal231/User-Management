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

exports.login = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            if(password == user.password){
                return res.status(200).json({
                    success: true,
                    message: "Successfully login..."
                });
            }else{
                return res.status(402).json({
                    success: false,
                    message: 'Password Wrong...',
                })
            }
        }else{
            return res.status(401).json({
                success: false,
                message: 'User is not found this email...',
            })
        }
    }catch(err){
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal Error...',
        })
    }
}