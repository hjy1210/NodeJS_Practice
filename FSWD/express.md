#### app
var express=require('express')

app=express()

#### response method:
```
res.send()
res.end()
res.sendFile()
res.json()
res.sendStatus()
```
#### handle
(req,res)=>{... responsemethod()}

#### middleware
(req,res,next)=>{... next()}

#### app.use(middleware)

#### error handle
(err,req,res,next)=>{...}

#### handles
middleware* handle

### app.Method
app.Method(routepath,handles)

Method: get, post, put, delete

#### routepath:
* ordinary string
* pattern string
* regular string

#### router params:

* Route path: /users/:userId/books/:bookId
* Request URL: http://localhost:3000/users/34/books/8989
* req.params: { "userId": "34", "bookId": "8989" }

#### route
Use route, we can chain methid.
```
app.route(routepath)
  .get(handle)
  .post(hanlde)
  .delete(handle)
```
#### router
Router instance is a mini app.

content of birds.js:
```
var express=require('express')
var router=express.Router()

router.use(middleware)
router.get(routepath,handle)
module.exports=router
```
```
var router=require('./birds')
var app=express()
app.use('/birds',router)
```
The real route path is routepath in birds.js prepended by /birds.



