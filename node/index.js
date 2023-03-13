const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3333;

const routers = require('./src/routes/router');
app.use(routers);
 
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))