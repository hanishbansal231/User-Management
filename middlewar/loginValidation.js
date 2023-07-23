exports.loginValidation = async (req,res,next) => {
    const {email,password} = req.body;
    if(req.body && email && password ){
        next();
    }else{
        return res.status(402).json({
            success: false,
            message: 'User fill the All inputs...',
        })
    }
}