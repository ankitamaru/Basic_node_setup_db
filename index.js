const express = require("express");
const app = express();
const port = 8000;
const db = require('./config/mongodb');
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');

// middleware
app.use(express.json());

// routes
// e.g. user routes
app.use('/users',userRoutes);

// e.g. product routes
app.use('/products',productRoutes);

app.get('/',(req,res)=>{
    res.send("Welcome to the server")
})

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server listening on Port ${port}`);
  }
});
