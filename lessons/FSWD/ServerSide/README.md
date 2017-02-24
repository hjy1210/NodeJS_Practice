# Course Outline

* Node.js and	Node	modules
* Express	Framework
* MongoDB
* Backend	as	a	Service	(BaaS)


## Module 1
* Full	Stack	Web	Development:	The	Big	Picture
* Introduction	to	Node.js and	NPM
* Node	Modules
* Node	and	HTTP
* Introduction	to	Express
#### Full	Stack	Web	Development:	The	Big	Picture

[What is a Full Stack developer?](http://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/)

[Wait, Wait… What is a Full-stack Web Developer After All?](https://edward-designer.com/web/full-stack-web-developer/)

[The Myth of the Full-stack Developer](http://andyshora.com/full-stack-developers.html)

[Multi-tier Architecture](https://en.wikipedia.org/wiki/Multitier_architecture)

[What is the 3-Tier Architecture?](http://www.tonymarston.net/php-mysql/3-tier-architecture.html)

#### Introduction	to	Node.js and	NPM
Node.js Use	Cases
* Utilities	written	in	JavaScript	for	web
development:
    * Bower,	Grunt,	Gulp,	Yeoman	etc.
* Server-side	Development
  * Web	server,	Business	logic,	Database	access

Node	Package	Manager
  * Node	package	manager	(NPM):	manages
  ecosystem	of	node	modules	/	packages
  * A	package	contains:
    * JS	files
    * package.json (manifest)

[Nodejs.org](https://nodejs.org/en/)

[Npmjs.com](https://www.npmjs.com/)

[Node API Documentation](https://nodejs.org/api/)

[NPM Documentation](https://docs.npmjs.com/)

JavaScript	Modules
* JavaScript	does	not	define	a	standard	library
* CommonJS API	fills	this	gap	by	defining	APIs
for	common	application	needs
    * It	defines	a	module	format
    * Node	follows	the	CommonJS module	specification
* Each	file	in	Node	is	its	own	module
* The	module variable	gives	access	to	the	current
    module	definition	in	a	file
* The	module.exports variable	determines	the
    export	from	the	current	module
* The	require function	is	used	to	import	a	module

rectangle Module:
```
module.exports =	function	()	{
return	{
perimeter:	function(x,y)	{	return	(2*(x+y));	},
area:	function(x,y)	{	return	(	x*y)	));	}
};
}
```
Using	this	module:
```
var rect =	require(‘./rectangle’);
```
rectangle	Module:
```
exports.perimeter =	function	(x,	y)	{
return	(2*(x+y));
}
exports.area =	function	(x,	y)	{
return	(x*y);
}
```
exports is	alias	for	module.exports

#### Node Resource
[yargs](https://github.com/yargs/yargs)
[Node HTTP](https://nodejs.org/api/http.html)

[Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

[fs Module](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html) exists, readFile

[path Module](https://nodejs.org/dist/latest-v4.x/docs/api/path.html) resolve

#### HTTP Resources

[Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

[List of HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

#### Express Resources

ExpressJS
Connect
Express Wiki
morgan
body-parser

#### Other Resources

Understanding Express.js

A short guide to Connect Middleware

## Module	2:	Data,	Data,	Where	art	Thou Data?
* Express	Generator
* Introduction	to	MongoDB
* Node	and	MongoDB
* Mongoose	ODM

## Module	3:	Halt!	Who	goes	there?
* REST	API	with	Express,	MongoDB and	Mongoose
* Basic	Authentication
* Cookies,	Tea	and	err	...	Express	Sessions
* User	Authentication	with	Passport

## Module	4:	Backend	as	a	Service	(BaaS)
* Mongoose	Population
* HTTPS	and	Secure	Communication
* Backend	as	a	Service	(BaaS)
* Loopback,	StrongLoop ARC	and	IBM	Bluemix
(Guest	Lecture	by	Mr.	Raymond	Camden)
