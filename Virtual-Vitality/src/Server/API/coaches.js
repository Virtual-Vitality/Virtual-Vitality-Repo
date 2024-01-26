const express = require("express");
const prisma = require("../client.cjs");
const router = express.Router();

//api/coaches
router.get("/", async (req, res) => {

    const allCoaches = await prisma.coach.findMany();
    res.send(allCoaches)
})

module.exports = router;