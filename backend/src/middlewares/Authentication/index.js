const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try
    {
        const token = req.header('Auth-Token');

        if(!token)
        {
            return res.status(401).json({
                success: false,
                message: "Invalid Token"
            });
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.id = payload.id;
        next();
    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message: error
        });
    }
};

module.exports = authenticate;