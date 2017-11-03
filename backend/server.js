var cors = require('cors')
var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var posts = [{
    message: 'hello'
},
{
    message: 'hello again'
}
]

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/register', (req, res) => {
    var userData = req.body
    res.sendStatus(200)
    console.log(userData.email)
})

var port = 3000

mongoose.connect('mongodb://test:test@ds245615.mlab.com:45615/stackoverflow-fidelity', {useMongoClient: true}, (err) => {
    if(!err)
        console.log('connected to mongodb')
} )

app.listen(port,()=>{
    console.log('listening on port ', + port)
})