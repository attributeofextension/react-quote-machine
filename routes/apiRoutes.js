const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireLogin = require('../middlewares/requireLogin');

const QuoteMachine = mongoose.model('quoteMachines');

module.exports = (app) => {
  app.get('/api/quotes/my', requireLogin, async (req, res) => {
    const existingQuoteMachine = await QuoteMachine.findOne({userId:req.user._id});
    if(!existingQuoteMachine) {
      const quoteMachine = await new QuoteMachine({userId:req.user._id}).save() 
      res.send(quoteMachine);
    } else {
      res.send(existingQuoteMachine);
    }
  });
  app.post('/api/quotes/captions', requireLogin, async (req, res) => {
    const qm = await QuoteMachine.findOne({userId:req.user._id});
    console.log(req.body.name);
    qm.name = req.body.name;
    console.log(qm);
    await qm.save();
    res.send(qm);
  });
  app.post('/api/quotes/my', requireLogin, async (req, res) => {
    const qmid = req.params.id;
    const qm = await QuoteMachine.findOne({userId:req.user._id});
    console.log(req.body);
    qm.quotes.push({author:req.body.author,content:req.body.content});
    await qm.save();
    res.send(qm);
  });
  app.get('/api/qm', async (req, res) => {
    qms = await QuoteMachine.find({});
    res.send(qms);
  });
  app.get('/api/qm/:id', async (req, res) => {
    console.log(req.params.id);
    qm = await QuoteMachine.findById(req.params.id);
    console.log(qm);
    res.send(qm);
  });
  app.get('/api/=-0987654321`')
}