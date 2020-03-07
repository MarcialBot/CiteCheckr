const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true 
}).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

db.on('connected', function() {
    console.log(`MongoDB connected on ${db.host}:${db.port}`)
});