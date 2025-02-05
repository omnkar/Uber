const express=require("express");
const router=express.Router();
const rideController=require("../controllers/ride.controller");
const authMiddlerware=require("../middlewares/Auth.middleware");
const {body}=require("express-validator")
router.post("/create",authMiddlerware.authUser,
body('pickup').isString().isLength({min:3}).withMessage("Pickup location is required"),
body('destination').isString().isLength({min:3}).withMessage("Destination is required"),
body('vehicleType').isString().isIn(['auto','car','motorcycle']).withMessage("Invalid vehicle type"),
rideController.createRide
)
module.exports=router;