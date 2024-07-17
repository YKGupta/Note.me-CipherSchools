const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../../models/User');

const signupHandler = async (req, res) => {
    try
    {
        const { name, email, password } = req.body;
        const oldUser = await User.findOne({ email });
        if(oldUser)
        {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hash = await bcrypt.hash(password, 10);

        const user = new User({
            name, 
            email,
            password: hash
        });

        await user.save();

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
            message: "Signup successful!",
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

module.exports = signupHandler;