const rideModel = require("../models/ride.model");
const mapService = require("./maps.service");
const bcrypt = require('bcrypt');
const crypto = require('crypto');

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }
  const distanceTime = await mapService.getDistanceTime(pickup, destination);
  const baseFare = {
    auto: 20,
    car: 50,
    motorcycle: 15,
  };

  const perKmRate = {
    auto: 10,
    car: 20,
    motorcycle: 8,
  };

  const perMinuteRate = {
    auto: 1,
    car: 2,
    motorcycle: 0.5,
  };
  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
    motorcycle: Math.round(
      baseFare.motorcycle +
        (distanceTime.distance.value / 1000) * perKmRate.motorcycle +
        (distanceTime.duration.value / 60) * perMinuteRate.motorcycle
    ),
  };
  console.log(fare);
  return fare;
}

 function getOtp(num)
{
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
}
module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  console.log(user);
  if (!user || !pickup || !destination || !vehicleType) {
    console.log(pickup);
    throw new Error("All Fields are Required");
  }
  const fare = await getFare(pickup, destination);
  const ride = rideModel.create({
    userId:user,
    pickupLocation:pickup,
    dropoffLocation:destination,
    otp:getOtp(6),
    fare: fare[vehicleType],
  });

  return ride;

  //   try {
  //     const savedRide = await newRide.save();
  //     return savedRide;
  //   } catch (error) {
  //     throw new Error("Error creating ride: " + error.message);
  //   }
};
