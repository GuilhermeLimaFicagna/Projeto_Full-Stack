import express from 'express';
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient();

// POST
app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body); // Requisição deu certo e post foi feito
})

//GET
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();

    res.status(200).json(users); // Requisição deu certo
})

// PUT
app.put('/users/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body); // Requisição deu certo e post foi feito
})

// DELETE
app.delete('/users/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({ message: 'User deleted with sucess' }); // Requisição deu certo e post foi feito
    } catch (error) {
        res.status(404).json({ error: 'User not fould'}); // Requisição deu certo e post foi feito 
    }
})

app.listen(3000);