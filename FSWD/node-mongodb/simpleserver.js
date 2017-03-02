const MongoClient=require('mongodb').MongoClient
const assert=require('assert')
const url='mongodb://localhost:27017/conFusion'
MongoClient.connect(url,(err,db)=>{
  assert.equal(err,null)
  console.log('Connect succeed to server');
  const collection=db.collection('dishes')
  collection.insertOne({name: "Uthapizza", description: "test"},(err,result)=>{
    assert.equal(err,null)
    console.log('Afer Insert')
    console.log(result.ops)
    collection.find({}).toArray((err,docs)=>{
      assert.equal(err,null)
      console.log("Found:")
      console.log(docs)
      db.dropCollection('dishes',(err,result)=>{
        assert.equal(err,null)
        console.log('result:',result);
        db.close()
      })
    })
  })
})
