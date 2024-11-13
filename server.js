import express from 'express';
import dotenv from 'dotenv';

const environmentFile = `.env.${process.env.NODE_ENV || 'development'}`;

dotenv.config({ path: environmentFile });

const app = express();
const PORT = process.env.PORT ?? 4200;

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`server starting at http://localhost:${PORT}/`);
});
