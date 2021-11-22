const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dhavalgediya:Dpatel123@realmcluster.tnwo1.mongodb.net/studentdashboard?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('err---------', err);
    } else {
        console.log('database successfully connected')
    }
})
