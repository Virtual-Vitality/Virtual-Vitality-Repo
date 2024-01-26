const express = require("express")
const prisma = require("../client.cjs")
const router = express.Router();

// /api/appointments
router.get("/", async (req, res) => {

    const allAppointments = await prisma.excercise.findMany();
    res.send(allAppointments)
})

module.exports = router;