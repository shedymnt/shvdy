const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const motorsRouter = require('./routes/products');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());


app.use('/Products', motorsRouter);


  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
