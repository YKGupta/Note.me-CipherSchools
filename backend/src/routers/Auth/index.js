const detailsHandler = require('../../controllers/Authentication/Details');
const loginHandler = require('../../controllers/Authentication/Login');
const signupHandler = require('../../controllers/Authentication/Signup');
const authenticate = require('../../middlewares/Authentication');
const AuthRouter = require('express').Router();

// No authentication needed : POST /login: to login a user
AuthRouter.post('/login', loginHandler);
// No authentication needed : POST /signup: to register a new user
AuthRouter.post('/signup', signupHandler);
// Authentication needed : GET /details: to get user details
AuthRouter.get('/details', authenticate, detailsHandler);

module.exports = AuthRouter;