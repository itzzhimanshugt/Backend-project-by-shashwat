const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://himanshuguptas65:3s31ZwSfcJgMbVLm@cluster0.iejpk.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
module.exports = mongoose;