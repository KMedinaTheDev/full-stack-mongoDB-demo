console.log('May Node be with you')
const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
// const server =
// app.listen(3000, function() {
//   console.log('listening on 3000')
// })
//sets the view engine in Express to ejs
app.set('view engine', 'ejs')

// The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended: true}))
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
//db variable created to allow us to use the database when we handle request from the browser
var db
//connect method
MongoClient.connect('mongodb://karenMedina:mongoDBDemo@ds155268.mlab.com:55268/star-wars-quotes-mongodb-demo', (err, client) => {
  if (err) return console.log(err)
  db = client.db('star-wars-quotes-mongodb-demo') // whatever your database name is
  // ... start the server
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
