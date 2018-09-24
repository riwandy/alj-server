const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server);
const {sequelize} = require('./models')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const passport = require('passport')
const session = require('express-session')
const config = require('./config/config')

app.use(cors())
//authentication
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)

//parsers
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//error handler
app.use(function(err, req, res, next){
    if (!err.statusCode) err.statusCode = 500;
    res.status(500).send({error : err.message})
})

//routers
routes(app);

//listen
sequelize.sync({force : false})
.then(()=>{
    server.listen(8000,()=>{
        console.log('server started')
    })
})
.catch(function(error){
    console.log(error.message)
})

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
});