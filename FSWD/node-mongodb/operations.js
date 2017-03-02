var assert = require('assert');

exports.insertDocument = function(db, document, collection, callback) {
  const coll=db.collection(collection)
  coll.insertOne(document,(err,result)=>{
    assert.equal(err,null)
    console.log("Inserted ",result.result.n+
      " documents into the document collection "+collection)
    callback(result)
  })
}

exports.findDocuments = function(db, collection, callback) {
  db.collection(collection).find({}).toArray((err,docs)=>{
    assert.equal(err,null)
    console.log(docs)
    callback(docs)
  })
}

exports.removeDocument = function(db, document, collection, callback) {
  db.collection(collection).deleteOne(document,(err,result)=>{
    assert.equal(err,null)
    console.log("Removed the document "+document)
    callback(result)
  })
}

exports.updateDocument = function(db, document, update, collection, callback) {
  const coll=db.collection(collection)
  coll.updateOne(document,{$set: update},null,(err,result)=>{
    assert.equal(err,null)
    console.log("Update the document with "+update);
    callback(result)
  })
}
