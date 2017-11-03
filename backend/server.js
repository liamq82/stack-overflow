var cors = require('cors')
var express = require('express')
var app = express()

var posts = [{
    message: 'hello'
},
{
    message: 'hello again'
}
]

app.use(cors())

app.get('/posts', (req, res) => {
    res.send(posts)
})

var port = 3000

app.listen(port,()=>{
    console.log('listening on port ', + port)
})