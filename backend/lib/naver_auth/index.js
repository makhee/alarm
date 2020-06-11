const config = require('../../config');
const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;

passport.use(new NaverStrategy({
        clientID: config.NAVER_AUTH_CLIENT_ID,
        clientSecret: config.NAVER_AUTH_CLIENT_SECRET_KEY,
        callbackURL: ''
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({
            'naver.id': profile.id
        }, (err, user) => {
            if (!user) {
                user = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    username: profile.displayName,
                    provider: 'naver',
                    naver: profile._json
                });
                user.save(function(err) {
                    if (err) console.log(err);
                    return done(err, user);
                });
            } else {
                return done(err, user);
            }
        });
    }
));

// 추가예정..