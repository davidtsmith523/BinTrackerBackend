import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Create Bin
router.post('/', async (req, res) => {
  const { qrCode, userId } = req.body;
  try {
    const result = await prisma.bin.create({
      data: {
        qrCode, 
        userId 
      },
    });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: 'Error happened in creating a bin'})
  }});

// List Bin
router.get('/', async (req, res) => {
  const allBins = await prisma.bin.findMany( {include: {items: true} } );
  res.json(allBins);
});

// Get One Bin
router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const bin = await prisma.bin.findUnique({ include: {items: true}, where: {id: Number(id)}})
  res.json(bin);
});

// Update Bin (Probably will not need)
router.put('/:id', async (req, res) => {
  const {id} = req.params;
  const { qrCode } = req.body;
  try {
    const result = await prisma.bin.update({
      where: { id: Number(id)},
      data: { qrCode }
    });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: 'Error happened in updating a bin'})
  }
});

// Delete Bin
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  await prisma.bin.delete({ where: {id: Number(id)} })
  res.status(200).json({ message: 'Successfully deleted bin', success: true})});


export default router;