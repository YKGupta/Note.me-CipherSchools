const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../../models/User');

const loginHandler = async (req, res) => {
    try
    {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user)
        {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect)
        {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const payload = {
            id: user._id
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

        const data = {
            name: user.name,
            email: user.email,
            token
        };

        res.status(200).json({
            success: true,
            message: "Login successful!",
            data
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

module.exports = loginHandler;