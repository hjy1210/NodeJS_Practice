const mongoose=require('mongoose')
const assert=require('assert')

const Dishes=require('./models/dish-1')

const url="mongodb://localhost:27017/conFusion"
mongoose.connect(url)

const db=mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))

db.on('open',()=>{
  console.log("Connect correctly to server")

  Dishes.create({
    name:'Hon',description:'test'
  },(err,dish)=>{
    if (err) throw err
    console.log('Dish created');
    console.log(dish);
    const id=dish._id
    setTimeout(()=>{
      Dishes.findByIdAndUpdate(id,{
        $set:{description:'Updated test'}
      },{
        new:true
      })
      .exec((err,dish)=>{
        if (err) throw err
        console.log("Update dish");
        console.log(dish);
        db.collection('dishes').drop(()=>{
          db.close()
        })
      })
    },3000)
  })
})
