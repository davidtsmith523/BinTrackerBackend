import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Create User
router.post('/', async (req, res) => {
  const { email, name, username, password } = req.body;
  try {

    const result = await prisma.user.create({
      data: {
        email,
        name,
        username,
        password,
      },
    });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: 'Error happened in creating a user'})
  }
});

// List users
router.get('/', async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

// Get One User
router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const user = await prisma.user.findUnique({ where: {id: Number(id)}})
  res.json(user);
});

// Update User
router.put('/:id', async (req, res) => {
  const {id} = req.params;
  const { email, name, password } = req.body;
  try {
    const result = await prisma.user.update({
      where: { id: Number(id)},
      data: { email, name, password }
    });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: 'Error happened in updating a user'})
  }
});

// Delete User
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  await prisma.user.delete({ where: {id: Number(id)} })
  console.log(id);
  res.status(200).json({ message: 'Successfully deleted user', success: true})
});


export default router;