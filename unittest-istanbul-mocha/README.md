# unittest with istanbul and mocha

## install mocha golbally
`npm install --save-dev mocha`
`npm install -g istanbul`

## Perform test & coverage
`npm run test`

`npm run coverage`

Note: package.json裡面"scripts"中，"test"與"coverage"關於mocha的部分，
路徑與檔案有微妙的差異
```
"scripts": {
  "test": "./node_modules/.bin/mocha",
  "coverage":"istanbul cover ./node_modules/mocha/bin/_mocha -- -R spec"
},
```
Note:
"test": "./node_modules/.bin/mocha" can be shortened as "test": "mocha"
due to NPM
