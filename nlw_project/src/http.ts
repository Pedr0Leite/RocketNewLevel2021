import express from "express"; //npm add @types/express -D in case you see ... below the word "express"
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "../src/routes"

const app = express();

//Setting the Front End
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req,res)=>{
    return res.render("html/client.html");
})

const http = createServer(app); //We are creating the http protocol
const io = new Server(http); //We are creating the websocket protocol

io.on("connection", (socket: Socket)=>{
    console.log("Connected: ", socket.id);
})

app.use(express.json());

app.use(routes);

export { http, io };