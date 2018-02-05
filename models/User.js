const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  twitterId: String
});

mongoose.model('users',userSchema);

