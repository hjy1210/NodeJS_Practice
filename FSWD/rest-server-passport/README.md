## objective

* Use JSON web token for token-based authentication
* Use passport module together with passport-local and passport-local-mongoose for setting up localauthentication within local server.

## required modules
* jsonwebtoken
* passport
* passport-local
* passport-local-mongoose

## Example

**Internet Connection need establish first**

Before application start, we need to start mongodb server!

Server side: npm start.

Postman side:
#### register
* url: localhsot://3000/users/register
* method: POST
* body: {"username":"*username*","password":"*password*"}

#### login
* url: localhsot://3000/users/login
* method: POST
* body: {"username":"*username*","password":"*password*"}
* result: JSON data with *token*

#### restrict access dishes
In order to access, use *token* received from login operation.
* url: localhsot://3000/dishes
* method GET(ordianry users), POST(admins), DELETE(admins)
* headers: Content-Type: application/json, x-access-token: *token*

#### debug server and client simultaneously
1. 參考[Calling Externally Hosted Service using Node.js](http://www.dotnetcurry.com/nodejs/1225/call-external-service-using-nodejs)
實作client.js
2. 修改 lauch.json，可以同時對server端與client端進行除錯。
#### note
to change user "admin" has admin priviledge
In mongo prompt, 
1. use conFusion 
2. db.users.update({username:"admin"},{$set:{admin:true}})

#### accounts
* {"username":"honjang","password":"abcde"} 
* {"username":"yuanhsiang","password":"abcde"} 
* {"username":"admin","password":"abcde"}
