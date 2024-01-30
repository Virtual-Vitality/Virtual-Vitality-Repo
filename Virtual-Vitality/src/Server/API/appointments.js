const express = require("express")
const prisma = require("../client.cjs")
const router = express.Router();

// /api/appointments/userId
router.get("/:userId", async (req, res) => {
   
    try {
        const allAppointments = await prisma.appointments.findMany({
            where: {
                userId : +req.params.userId
            }, 
            include:{
                coach:true,
            }
        })
        res.send(allAppointments)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;

//api/appointments
router.post("/", async (req, res) =>{
    const {date,coachId,userId} = req.body
    try {
        const allAppointments = await prisma.appointments.create({
            data: {
                date, 
                coachId,
                userId
            }
        })
        res.send(allAppointments)
    } catch (error) {
        console.log(error)
    }
  
})
module.exports = router;