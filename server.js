const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require("cors")
const { MongoClient } = require("mongodb")
const mongoose = require('mongoose')
const { userInfo } = require('os')
const https = require('https')

const app = express()

app.use(cors({

    origin: '*'

}))


const MONGODB_URI = 'mongodb+srv://eirpolRead:BRRMk2TX6MCKBzHf@cluster0.7ni35.mongodb.net/TDs?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true},  () => 

console.log('connected')
);


const TDsSchema = new mongoose.Schema();
const TDs = mongoose.model('TDs', TDsSchema, 'TDs');



const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'))

app.get('/api', (req, res) => {


  TDs.find({}, (err, results) => {
    if(err) {
      console.log("Error")
      throw err
    }
    res.json(results)
  })

  

    
})


// app.get('/api/test', (req, res) => {

//  function test() {
// https.get("https://api.oireachtas.ie/v1/divisions?chamber_type=house&chamber_id=&chamber=dail&date_start=2020-01-01&date_end=2099-1-1&limit=50&outcome=Carried", res => {

// let data = '';
//   res.on('data', chunk => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     data = JSON.parse(data);
//     console.log(data);
    
//   })
  
// }).on('error', err => {
//   console.log(err.message)
// })
//  }

//  test(res)


// })


app.listen(PORT, console.log(`Server is starting at ${PORT}`))

