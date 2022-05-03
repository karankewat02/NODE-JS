const rwClient = require("./twitterClient.js");
const fetch = require('node-fetch');

const express = require('express');
const res = require("express/lib/response");

const app = express();

app.listen(process.env.PORT || 4000 , ()=>{
    console.log("app listenting on port 4000")
})

app.get("/",(req,res)=>{

    const tweet = async () => {

        const rand = Math.floor(Math.random()*(200-0+1)+0);   
        const response = await fetch("https://programming-quotes-api.herokuapp.com/quotes")
        const quotes = await response.json();
    
        if(response){
    
            try {
                await rwClient.v1.tweet(`${quotes[rand].en}\n\nBy - ${quotes[rand].author}`)  
                res.send("Tweeted !!")    
            } catch (error) {
                console.error(error)
            }
        
        }else{
            try {
                await rwClient.v1.tweet("Tweeted via bot !!")        
            } catch (error) {
                console.error(error)
            }
        
        }   
    }

    tweet();

})


// https://picsum.photos/1600/900

// const tweet = async () => {

//     const rand = Math.floor(Math.random()*(200-0+1)+0);   
//     const response = await fetch("https://programming-quotes-api.herokuapp.com/quotes")
//     const quotes = await response.json();

//     if(response){

//         try {
//             await rwClient.v1.uploadMedia('./ShubParshuramJayanti.png');
//             await rwClient.v1.tweet(`Good Morning :)\n\n${quotes[rand].en}\n\nBy - ${quotes[rand].author}`)  
//             console.log("tweeted")     
//         } catch (error) {
//             console.error(error)
//         }
    
//     }else{
//         try {
//             await rwClient.v1.tweet("Tweeted via bot !!")        
//         } catch (error) {
//             console.error(error)
//         }
    
//     }

// }

// tweet();

// const job = new cronJob("* * * * *", ()=>{
//     tweet();
// })

// job.start();