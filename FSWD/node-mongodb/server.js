const MongoClient=require('mongodb').MongoClient
const assert=require('assert')

const dboper=require('./operations')

const url='mongodb://localhost:27017/conFusion'

MongoClient.connect(url,(err,db)=>{
  assert.equal(err,null)
  console.log("S:Connect server succeed");
  dboper.insertDocument(db,{name: "Vadonut", description: "Test"},
  'dishes',(result)=>{
    console.log("S:",result.ops)
    dboper.findDocuments(db,"dishes",(docs)=>{
      console.log("S: Found:",docs);
      dboper.updateDocument(db,
        { name: "Vadonut" },{description:"Updated test"},
        'dishes',(result)=>{
        console.log("S: update result:",result.result);
        dboper.findDocuments(db,'dishes',(docs)=>{
          console.log("S:",docs);
          db.dropCollection('dishes',(result)=>{
            console.log('S: drop:',result)
            db.close()
          })
        })
      })
    })
  })
})
