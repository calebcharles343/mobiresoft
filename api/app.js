import express from 'express';
import path from 'path';

import router from './v1/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../UI')));

app.use('/api/v1', router);

app.get('/*', (req, res) => {
  res.status(404).send({ message: 'Invalid request.' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
