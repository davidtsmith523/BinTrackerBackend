import { Router } from 'express';

const router = Router();

// Create Item
router.post('/', (req, res) => {
  res.status(501).json({ error: 'Not Implemented' });
});

// List Item
router.get('/', (req, res) => {
  res.status(501).json({ error: 'Not Implemented' });
});

// Get One Item
router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// Update Item
router.put('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// Delete Item
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});


export default router;