/*
const mongoose = require('mongoose');
const MONGO_URI = "mongodb://sparcs:tnfqkrtm@ssal.sparcs.org:24027?authSource=admin";
mongoose.set('useNewUrlParser', true);
//await MongoClient.connect(uri,{ useNewUrlParser: true });
mongoose.connect(MONGO_URI, err => {
    if (err){
	    console.error(`Unexpected error: ${err}`);
	    throw err;
    }
    else console.log(`Successfully connected to MongoDB.`);
});
*/

const mongoose = require('mongoose');

mongoose
    .connect("mongodb://sparcs:tnfqkrtm@ssal.sparcs.org:24027?authSource=admin", {
        useNewUrlParser: true,
        //useCreateIndex: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });
