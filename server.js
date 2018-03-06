console.log('May Node be with you')
const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
// const server =
// app.listen(3000, function() {
//   console.log('listening on 3000')
// })
//db variable created to allow us to use the database when we handle request from the browser
var db
//connect method
MongoClient.connect('mongodb://karenMedina:mongoDBDemo@ds155268.mlab.com:55268/star-wars-quotes-mongodb-demo', (err, client) => {
  if (err) return console.log(err)
  db = client.db('star-wars-quotes-mongodb-demo') // whatever your database name is

//sets the view engine in Express to ejs
app.set('view engine', 'ejs')
// The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
//so the server reads JSOn data that was converted w/ JSON.stringify
app.use(bodyParser.json())
app.get('/', (req, res) => {
  var cursor = db.collection('quotes').find().toArray((err,result) =>{
    if(err) return console.log(err)
    res.render('index.ejs', {quotes:result})
      // console.log(results)
  })
  //had to comment out the sendFile method in order to use the render ejs
  // res.sendFile(__dirname + '/index.html')
  // res.send('Hello World')
})
//same as above
// app.get('/', function(req, res) {
//   res.send('Hello World')
// })
app.post('/quotes', (req, res) => {
  // console.log('Hellooooooooooooooooo!')
  // console.log(req.body)
  db.collection('quotes').save(req.body, (err, result)=>{
    console.log(result)
    if (err) return console.log(err)

    console.log("saved to database")
    res.redirect('/')
  })
})

// Send PUT Request here
app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    console.log("updated db")
    res.send(result)
})
  //   fetch({ /* request */ })
  // .then(res => {
  // if (res.ok) return res.json()
  // })
  // .then(data => {
  // console.log(data)
  // })
  // // Handle put request
 })

  app.delete('/quotes', (req, res) => {
    db.collection('quotes').findOneAndDelete({name: req.body.name},
    (err, result) => {
      if (err) return res.send(500, err)
      res.send({message: 'A darth vadar quote got deleted'})
    })
    // Handle delete event here
  })
  // ... start the server
  app.listen(4000, () => {
    console.log('listening on 4000')
    })

})
