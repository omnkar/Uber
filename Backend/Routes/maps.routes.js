const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/Auth.middleware");
const mapController = require("../controllers/maps.controller");
const { query } = require("express-validator");

router.get(
  "/get-coordinate",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getCoordinates
);

router.get(
  "/get-distance-time",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getDistanceTime
);
module.exports = router;

router.get(
  "/get-suggestions",
  query('input').isString().isLength({ min: 1 }),
  authMiddleware.authUser,
  mapController.getAutoCompleteSuggestions
);
