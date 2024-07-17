const loginHandler = require('../../controllers/Authentication/Login');
const signupHandler = require('../../controllers/Authentication/Signup');
const AuthRouter = require('express').Router();

// No authentication needed : POST /login: to login a user
AuthRouter.post('/login', loginHandler);
// No authentication needed : POST /signup: to register a new user
AuthRouter.post('/signup', signupHandler);

module.exports = AuthRouter;