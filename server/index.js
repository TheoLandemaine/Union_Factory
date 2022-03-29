require('dotenv').config()

const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const app = express();

const { OAuth2Client } = require('google-auth-library');

// app.use(cors());
//
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM `association`", (err,result)=>{
        if(err) {
            console.log(err)
        }
        res.send(result)
        console.log(result)
    });   
});

app.use(express.json());
app.use(cors({ 
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userId",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24,
    }
}));

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

db.connect((err) => {
    if(err) throw err;
    console.log("database connected to : " + process.env.DATABASE_HOST);
})

app.post('/register', (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const prenom = req.body.prenom;
    const nom = req.body.nom;
    const dateNaissance = req.body.dateNaissance;

    bcrypt.hash(password,saltRounds,(err,hash) => {
        if (err) {
            console.error(err);
        }
        
        // REGISTER SECURITY
        if(!username || !email || !password || !prenom || !nom || !dateNaissance || !dateNaissance) return res.send({message: 'Please fill all the fields'})
        if(password.length < 8) return res.send({message: "Your password must be at least 8 characters"}); 
        if(!email.includes("@")) return res.send({message: 'You forgot the @ in your email'});
        // if(!password.value.match(/\d/)) return res.send({message: 'Your password needs to contain at least two numbers'});
        // if(!prenom.charAt(0).toUpperCase()) return res.send({message: 'Your first name needs to be in uppercase'});
        // if(!nom.charAt(0).toUpperCase()) return res.send({message: 'Your last name needs to be in uppercase'});
        // if(!username) return res.send({message: 'Please enter a username'});
        // if(!email || !password) return res.send({message: 'Please enter a email address and password'});
        // if (password.includes.toUpperCase()) return res.send({message: "Your password must contain at least one uppercase letter."});
        // if (password.includes(/[0-9]/) < 1) return res.send({message: "Your password must contain at least two digit."}); 
        // if(!dateNaissance) return res.send({message: 'Please enter your birth date'});

        db.query("INSERT INTO login (username, email, password, prenom, nom, dateNaissance) VALUES (?,?,?,?,?,?)", 
        [username,email,hash,prenom,nom,dateNaissance], 
        (err,result)=>{
            if(err) throw err;
            if(err){
                res.send({err: err})
                res.send({message : "Something went wrong"})
            }
            if (result.length > 0){
                res.send(result);
            }else{
                res.send({message : "Successful register"})
            }
        })
    })
})

app.get('/login', (req, res) => {
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})

app.post('/login', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM login WHERE email = ?;",
    email, 
    (err,result)=>{
        if(err){
            // console.log(err);
            res.send({err: err})
        }
        if (result.length > 0){
            // res.send(result);
            bcrypt.compare(password, result[0].password, (error, response) =>{
                if (response){
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send(result);
                    
                    //set logged in status in database
                    db.query("UPDATE login SET loggedIn = 'true' WHERE email = ?", email, (err, result) => {
                        if(err) throw err;
                        if(err){
                            res.send({err: err})
                        }
                        if (result.length > 0){
                            res.send(result);
                        }
                    })
                } else {
                    res.send({message: "Wrong username or password combinaion"})
                }
            });
        }else{
            res.send({message : "User doesn't exist"})
        }
    })
})



// ************************************************************************************************
// LOGIN WITH GOOGLE
// ************************************************************************************************

const client = new OAuth2Client(process.env.GOOGLE_CLIENT);

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post('/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});


// ************************************************************************************************
// ************************************************************************************************


const logout = async (req, res) => {
    res.clearCookie("userId", { path: "/" });
    //set uset logged out in database
    db.query("UPDATE login SET loggedIn = 'false' WHERE email = ?", req.session.user[0].email, (err, result) => {
        if(err) throw err;
        if(err){
            res.send({err: err})
        }
        if (result.length > 0){
            res.send(result);
        }
    })        
    res
      .status(200)
      .json({ success: true, message: "User logged out successfully" });
};

app.get("/logout", logout, (req, res) => {
    res.send("You have been logged out successfully");
});


// ************************************************************************************************
// ************************************************************************************************
// ****************************** FAVORITES ********************************************************

app.get('/fav', (req, res) => {
    if(req.session.user){
        db.query("SELECT * FROM favorites WHERE user_id = ?", req.session.user[0].id, (err, result) => {
            if(err) throw err;
            if(err){
                res.send({err: err})
            }
            if (result.length > 0){
                res.send(result);
            }
        })
    }else{
        res.send({message: "You are not logged in"})
    }
})

app.post('/fav', (req, res) => {
    if(req.session.user){
        const user_id = req.session.user[0].id;
        const id_card = req.body.id_card;
        db.query("INSERT INTO favorites (user_id, id_card) VALUES (?, ?)", [user_id, id_card], (err, result) => {
            if(err) throw err;
            if(err){
                res.send({err: err})
            }
            if (result.length > 0){
                res.send(result);
            }
        })
    }else{
        res.send({message: "You are not logged in"})
    }
})

app.delete('/fav', (req, res) => {
    if(req.session.user){
        const user_id = req.session.user[0].id;
        const id_card = req.body.id_card;
        db.query("DELETE FROM favorites WHERE user_id = ? AND id_card = ?", [user_id, id_card], (err, result) => {
            if(err) throw err;
            if(err){
                res.send({err: err})
            }
            if (result.length > 0){
                res.send(result);
            }
        })
    }else{
        res.send({message: "You are not logged in"})
    }
})

// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************

app.listen(3003, ()=> {
    console.log('listening on port 3003');
});


module.exports = {
    logout,
}