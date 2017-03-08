## objective

* Use JSON web token for token-based authentication
* Use passport module together with passport-local and passport-local-mongoose for setting up localauthentication within local server.

## required modules
* jsonwebtoken
* passport
* passport-local
* passport-local-mongoose

## Example
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
* method GET, POST, DELETE
* headers: 'x-access-token': *token*


