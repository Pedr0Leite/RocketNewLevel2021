import express from "express"; //npm add @types/express -D in case you see ... below the word "express"

import "./database";
import { routes } from "../src/routes"

const app = express();
app.use(express.json());


/**
 * GET
 * POST
 * PUT
 * DELETE
 * PATCH
 * */

// app.get("/", (req,res)=>{
// return res.json({
//     message: "HELLO NLW JSON!"
// });
// });


// app.post("/users", (req,res)=>{
//     return res.json({
//         message: "POST saved success"
//     })
// })

app.use(routes);

app.listen(1337, ()=>{
    console.log('*');
    console.log('**');
    console.log('***');
    console.log('****');
    console.log('*****');
    console.log("Server is running on port 1337");
});

//npm run dev