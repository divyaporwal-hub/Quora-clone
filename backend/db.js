const mongoose = require('mongoose')
const url ='mongodb://Divyaporwal:Divya123@ac-vnk6jiw-shard-00-00.awm4ioz.mongodb.net:27017,ac-vnk6jiw-shard-00-01.awm4ioz.mongodb.net:27017,ac-vnk6jiw-shard-00-02.awm4ioz.mongodb.net:27017/quora-clone-mern?ssl=true&replicaSet=atlas-opobca-shard-0&authSource=admin&retryWrites=true&w=majority'

module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };