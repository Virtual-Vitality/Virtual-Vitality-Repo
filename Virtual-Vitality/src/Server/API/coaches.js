const express = require("express");
const prisma = require("../client.cjs");
const router = express.Router();

//api/coaches
router.get("/", async (req, res, next) => {
    try{
        const allCoaches = await prisma.coach.findMany({
        
        });
        res.send(allCoaches)
    }catch (error) {
        console.error(error.message);
        next(error);
    }
})


//api/coaches/:id
router.get('/:id', async (req, res, next) => {
    const coachId = parseInt(req.params.id);
    try {
        const user = await prisma.coach.findUnique({
            where: { id: coachId },
        });
        res.send(user);
    } catch (error) {
        console.error(error.message);
        next(error);
    }
});

module.exports = router;