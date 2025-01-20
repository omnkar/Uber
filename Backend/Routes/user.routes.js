const express=require('express');
const router=express.Router();

const{body}=require('express-validator'); // Importing express-validator to validate the data
const userController=require('../controllers/user.controller');

const authMiddleware=require("../middlewares/Auth.middleware");
router.post("/register",[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').optional().isLength({min:3}).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({min:5}).withMessage('Password must be at least 5 characters long')
],userController.registerUser);

router.post("/login",[
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({min:5}).withMessage('Password must be at least 5 characters long')
],userController.loginUser);

/**
 * @api {get} /users/profile Get User Profile
 * @apiName GetUserProfile
 * @apiGroup User
 * @apiPermission authenticated user
 *
 * @apiSuccess {Object} user User profile information.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "12345",
 *       "firstname": "John",
 *       "lastname": "Doe",
 *       "email": "john.doe@example.com"
 *     }
 *
 * @apiError 401 Unauthorized
 */
router.get("/profile",authMiddleware.authUser,userController.getUserProfile);

/**
 * @api {post} /users/logout Logout User
 * @apiName LogoutUser
 * @apiGroup User
 * @apiPermission authenticated user
 *
 * @apiSuccess {String} message Logout success message.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Logged out successfully"
 *     }
 *
 * @apiError 401 Unauthorized
 */
router.get("/logout",authMiddleware.authUser,userController.logoutUser);

module.exports=router;