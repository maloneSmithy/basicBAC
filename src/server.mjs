import express from 'express';
const app = express();
//import {products} from "./model/products.mjs"
const products={
    id:1,
     type:"fruits",
     name:"banana",
     price:50,
    }
//routes
/* GET home page. */
app.get('/', (req, res)=> {
  res.json({msg:"Welcome to the Home Page "});
});

app.get('/products', (req, res)=> {

  res.json({msg:"Welcome to the Products Page"});

});

//listing
const PORT=3000

app.listen(PORT,()=>console.log(`listining to port ${PORT} ...`))




