const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser( (user,done) => {
  done(null,user.id);
});
passport.deserializeUser( async (id,done) => {
  const user = await User.findById(id);
  done(null,user);
});


passport.use(new TwitterStrategy({
    consumerKey: keys.twitterConsumerKey,
    consumerSecret: keys.twitterConsumerSecret,
    callbackURL: "/auth/twitter/callback",
    proxy: true
  },
  async (token, tokenSecret, profile, done) => {
    const existingUser = await User.findOne({ twitterId : profile.id});
    if(existingUser) {
      return done(null,existingUser);
    } else {
      const user = await new User({twitterId: profile.id}).save();
      return done(null,user);
    }
  }
));