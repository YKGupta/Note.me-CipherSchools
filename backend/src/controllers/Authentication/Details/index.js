const User = require("../../../models/User");

const detailsHandler = async (req, res) => {
    try
    {
        const user = await User.findById(req.id).select('-password');
        if(!user)
        {
            return res.status(404).json({
                success: false,
                message: "Invalid Token"
            });
        }
        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user
        });
    }
    catch(error)
    {
        res.status(500).json({
            success: false,
            message: error
        });
    }
};

module.exports = detailsHandler;