require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 9000; // Set a default port (3000) if PORT is not defined in the environment.

app.use(express.json());
app.use(cors());

// Connection
mongoose.connect(process.env.MONGOOSE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connection successful');
    })
    .catch((error) => {
        console.error('Connection error:', error);
    });



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
