const express = require('express');
const { PrismaClient } =require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const prisma = new PrismaClient();






router.post('/login', async (req, res, next) => {
    const { userName, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { userName }, // Replace 'email' with 'username' if 'username' is unique
        });
            console.log(user);
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
            res.json({ token, user });
        } else {
            res.status(401).json({ message: 'Invalid userName or password' }); // Adjust the message as per your field used for login
        }
    } catch (error) {
        console.error(error.message);
        next(error);
    }
});
router.post('/Register', async (req, res, next) =>{
    const {name, email, userName, password, isCoach} =req.body;
    const saltRounds = 5;
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const user = await prisma.user.create({
            data: {
                name, 
                email, 
                userName, 
                password: hashPassword,
                isCoach
                //
                //
                //
            }
            
        })
        const token = jwt.sign({id: user.id, userName: user.userName}, 
			process.env.JWT_SECRET);
		res.status(201).send({token});
        res.send(user)
        console.log(`This works 1`)
    } catch (error) {
        console.log(error)
    } 
    console.log(`this works`)
});



module.exports = router;
