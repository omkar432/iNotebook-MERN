const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

//connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json());

//Available Routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// app.listen(port, () => {
// console.log(`Example app listening on port ${port}`)
// })


const start = async () =>{
    try{
        await connectToMongo();
        app.listen(port, () => {
            console.log(`iNotebook backend listening at http://localhost:${port}`);
            });
    }catch(error){
        console.log(error);
    }
};

start();
