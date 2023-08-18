import express from 'express';
import userRoutes from './routes/userRoutes';
import binRoutes from './routes/binRoutes';
import itemRoutes from './routes/itemRoutes';


const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/bin', binRoutes);
app.use('/item', itemRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('server ready')
});