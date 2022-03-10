const express = require('express');
const db = require('./config/db')
const cors = require('cors')


const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())



app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM `association`", (err,result)=>{
        if(err) {
            console.log(err)
        }
        res.send(result)
        console.log(result)
    });   });


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
