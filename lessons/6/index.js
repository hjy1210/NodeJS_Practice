const express = require('express')
const rp = require('request-promise')
const exphbs = require('express-handlebars')
const path = require('path')
const port = 3000
const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
// 連覽器端輸入 http://localhost:3000/:city/?city=chicago
app.get('/:city', (req, res) => {
  console.log(req.query)
  //res.send("query="+JSON.stringify(req.query))
  rp({
    uri: 'http://apidev.accuweather.com/locations/v1/search',
    qs: {
      q: req.query.city,
      apiKey: 'hoArfRosT1215'
         // Use your accuweather API key here
    },
    json: true
  })
    .then((data) => {
      //console.log(data)
      //res.send(data)
      //Latitude":22.991,"Longitude":120.205
      //res.render('home', {name:JSON.stringify(data)})
      if (data.length>0){
        res.render('home', {Latitude:data[0].GeoPosition.Latitude,Longitude:data[0].GeoPosition.Longitude})
      } else {
        res.render('home', {Latitude:"undefined",Longitude:"undefined"})
      }
      //res.render('home', {name:data.toString()}) //NOT OK
    })
    .catch((err) => {
      console.log(err)
      //res.render('error')
    })
})

app.listen(port,(err)=>{
  if (err) {
    return console.log("Something wrong !:",err)
  }
  console.log(`server is listening on ${port}`)
})
