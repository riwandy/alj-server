var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt;
const { User } = require('../models')
const config = require('../config/config')

module.exports = async function(passport){
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.authentication.jwtSecret;

    passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
        User.findOne({username : jwt_payload.username})
            .then( user => { 
                return done(null, user)
            })
            .catch( err => { return done(err) })
    
    }));
}