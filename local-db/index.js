const Mongod = require('mongod');

const server = new Mongod(27017);

server.open((err) => {
    if(err){
        console.err(err);
        return;
    }
    console.log("Mongod listening...");
});