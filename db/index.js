const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Activity_Tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('err---------', err);
    } else {
        console.log('database successfully connected')
    }
})