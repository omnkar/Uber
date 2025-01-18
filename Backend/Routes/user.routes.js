const express=require('express');
const router=express.Router();

const{body}=require('express-validator'); // Importing express-validator to validate the data
const userController=require('../controllers/user.controller');
router.post("/register",[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').optional().isLength({min:3}).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({min:5}).withMessage('Password must be at least 5 characters long')
],userController.registerUser);

module.exports=router;