const mongoose = require('mongoose');
require("dotenv").config();

// connect to the database
mongoose.connect(process.env.MONGODB_URI);

const Item = require("../models/item");

const items = [
  {
    name: "Cool Jeans",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Jeans_for_men.jpg/220px-Jeans_for_men.jpg",
    type: "jeans"
  },
  {
    name: "Also Cool Jeans",
    imageURL: "https://pics.ae.com/is/image/aeo/0117_3731_936_f?$bvFeed$",
    type: "jeans"
  },
  {
    name: "This jeans will make you happy",
    imageURL: "https://s-media-cache-ak0.pinimg.com/736x/49/96/f1/4996f1e8db0eece4fa76e2a37f5db6c7.jpg",
    type: "jeans"
  },
  {
    name: "Jeans that make your butt look cool",
    imageURL: "https://static.bershka.net/4/photos2//2017/V/0/1/p/0002/936/400/0002936400_1_1_3.jpg?t=1485507854957",
    type: "jeans"
  },
  {
    name: "Surprise! Jeans!",
    imageURL: "https://riverisland.scene7.com/is/image/RiverIsland/290720_main?$CrossSellProductPage514$",
    type: "jeans"
  },
  {
    name: "Hipster shirt",
    imageURL: "https://riverisland.scene7.com/is/image/RiverIsland/297488_main?$CrossSellProductPage300$",
    type: "shirt"
  },
  {
    name: "Drunk people shirt",
    imageURL: "https://d1k8qpc2ohemxm.cloudfront.net/5601cb8ff01026f4284f4b60/fruit-of-the-loom-cotton-t-F20202.jpg",
    type: "shirt"
  },
  {
    name: "Weird shirt",
    imageURL: "http://nord.imgix.net/Zoom/12/_12807852.jpg?fit=fill&fm=jpg&dpr=2&h=368&w=240&q=30",
    type: "shirt"
  },
  {
    name: "Nerdy shirt",
    imageURL: "https://www.google.es/search?q=jeans&espv=2&site=webhp&source=lnms&tbm=isch&sa=X&ved=0ahUKEwibrPWHtvvSAhXGtBoKHUFzCeMQ_AUIBigB&biw=1636&bih=821#tbm=isch&q=nerdy+shirt&*&imgrc=FuwtluA4P8DlgM:",
    type: "shirt"
  },
  {
    name: "Super nerdy shirt",
    imageURL: "https://s-media-cache-ak0.pinimg.com/originals/dc/1b/18/dc1b1816aa75e9bb26d54788f35be5a2.jpg",
    type: "shirt"
  }
];

Item.create(items, (err, docs) => {
  if (err) { throw err; }
  docs.forEach( item => {
    console.log(item.name);
  });
  mongoose.connection.close();
});
