import { Router } from 'express';

const router = Router();

// Create Bin
router.post('/', (req, res) => {
  res.status(501).json({ error: 'Not Implemented' });
});

// List Bin
router.get('/', (req, res) => {
  res.status(501).json({ error: 'Not Implemented' });
});

// Get One Bin
router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// Update Bin
router.put('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// Delete Bin
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});


export default router;