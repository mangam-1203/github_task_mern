const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/form',(req,res)=>{
    //res.send("home page")
    res.render('form.ejs')
})

app.post('/form',async (req,res)=>{
    const userid = req.body.userid;
    const result = await axios.get(`https://api.github.com/users/${userid}`);
    const repos = await axios.get(`https://api.github.com/users/${userid}/repos`);
    const reposArr = Object.values(repos);
    console.log(reposArr[5]);
    console.log(typeof(reposArr));
    res.json({
        name : result.data.name,
        avatar : result.data.avatar_url,
        followers : result.data.followers,
        repos : reposArr[5]
    });
})

app.listen(5000,(req,res)=>{
    console.log("server is up and running");
    //res.send('I am listening')
})
