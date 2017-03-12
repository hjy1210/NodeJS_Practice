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

#### https
在[www.selfsignedcertificate.com](http://www.selfsignedcertificate.com/)可以線上製作自己加簽的數位憑證。

Didier Stevens的文章[Make Your Own Cert With OpenSSL on Windows](https://blog.didierstevens.com/2015/03/30/howto-make-your-own-cert-with-openssl-on-windows/)教人如何製作自我加簽的憑證。

程式呼叫自我加簽的網站, 參考[A less insecure way](http://stackoverflow.com/questions/20433287/node-js-request-cert-has-expired#answer-29397100) ，選項設定
`rejectUnauthorized: false`。

#### Oauth2.0
要用google Oauth2.0的功能，需要
* 在[API Console](https://console.developers.google.com)
上產生Credential，
* 在[API Library](https://console.developers.google.com/apis/library)上將Google+API致能(enable)。
* passport-google-oauth20
* google 保留有clientID 與 clientSecret的副本。需要的時候才去下載，不要放在程式碼裡面。
* redirect的時候，前面要多一個引數307，參考[HTTP Methods and Redirect Status Codes](https://blogs.msdn.microsoft.com/ieinternals/2011/08/19/http-methods-and-redirect-status-codes/)。

#### note
to change user "admin" has admin priviledge
In mongo prompt, 
1. use conFusion 
2. db.users.update({username:"admin"},{$set:{admin:true}})

#### accounts
* {"username":"honjang","password":"abcde"} 
* {"username":"yuanhsiang","password":"abcde"} 
* {"username":"admin","password":"abcde"}

to change user "admin" has admin priviledge
In mongo prompt, 
1. use conFusion 
2. db.users.update({username:"admin"},{$set:{admin:true}})

