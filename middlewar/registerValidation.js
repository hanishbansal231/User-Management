exports.registerValidation = async (req,res,next) => {
    const {name,email,password} = req.body;
    if(req.body && name && email && password ){
        next();
    }else{
        return res.status(402).json({
            success: false,
            message: 'User fill the All inputs...',
        })
    }
}