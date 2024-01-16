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


module.exports = router;