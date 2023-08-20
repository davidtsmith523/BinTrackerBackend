import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Create Item
router.post('/', async (req, res) => {
  const { photo, name, description, binId } = req.body;
  try {
    const result = await prisma.item.create({
      data: {
        photo,
        name,
        description,
        binId
      },
    });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: 'Error happened in creating a item'})
  }
});

// List Item
router.get('/', async (req, res) => {
  const allItems = await prisma.item.findMany();
  res.json(allItems);
});

// Get One Item
router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const item = await prisma.item.findUnique({ where: {id: Number(id)}})
  res.json(item);
});

// Update Item
router.put('/:id', async (req, res) => {
  const {id} = req.params;
  const { photo, name, description, binId } = req.body;
  try {
    const result = await prisma.item.update({
      where: { id: Number(id)},
      data: { photo, name, description, binId  }
    });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: 'Error happened in updating an item'})
  }
});

// Delete Item
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  await prisma.item.delete({ where: {id: Number(id)} })
  res.status(200).json({ message: 'Successfully deleted item', success: true})
});


export default router;