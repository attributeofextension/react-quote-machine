const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteMachineSchema = new Schema({
  userId: String,
  name: String,
  quotes: [{author:String,content:String}]
});

mongoose.model('quoteMachines',quoteMachineSchema);