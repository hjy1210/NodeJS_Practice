const mongoose=require('mongoose')
const assert=require('assert')

const Dishes=require('./models/dish-1')

const url="mongodb://localhost:27017/conFusion"
mongoose.connect(url)

const db=mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))

db.on('open',()=>{
  console.log("Connect correctly to server")

  const newDish=Dishes({
    name:'Hon',description:'test'
  })
  console.log(newDish);
  newDish.save((err)=>{
    if (err) throw err
    console.log('Dish created');
    Dishes.find({},(err,dishes)=>{
      if (err) throw err
      console.log(dishes);
      db.collection('dishes').drop(()=>{ // why small case in dishes
        db.close()
      })
    })
  })
})
