const express=require('express');
const router=express.Router();
const app=express();
const captainController=require('../controllers/captain.controller');
const {body}=require('express-validator');
const authMiddleware=require("../middlewares/Auth.middleware");


router.post("/register",[
    body('fullname.firstname').notEmpty().withMessage('First name is required'),
    body('fullname.lastname').optional().isLength({ min: 3 }).withMessage('Last name must be at least 3 characters'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('vehicle.color').notEmpty().withMessage('Color is required'),
    body('vehicle.plate').notEmpty().withMessage('Plate is required'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle, or auto'),
    
],captainController.registerCaptain);

router.post("/login",[
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
],captainController.loginCaptain);

router.get("/profile",authMiddleware.authCaptain,captainController.getCaptainProfile);

router.get("/logout",authMiddleware.authCaptain,captainController.logoutCaptain);
module.exports=router;