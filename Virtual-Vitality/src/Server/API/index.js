const express = require("express");
const router = express.Router();

// /API/coaches
router.use("/coaches", require("./coaches"));

// /API/exercises
router.use("/exercises", require("./exercises"));

// /API/users
router.use("/users", require("./users"));

// /API/workouts
// router.use("/workouts", require("./workouts"));


// /API/Appointments
router.use("/appointments", require("./appointments"));

router.use("/", (req, res) => {
    res.send(`Welcome to the API`);
})

module.exports = router;