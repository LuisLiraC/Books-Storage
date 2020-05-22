const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Bd is connected'))
    .catch(err => console.log(err));
