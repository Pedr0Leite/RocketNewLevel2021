import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(1337, ()=>{
    console.log('*');
    console.log('**');
    console.log('***');
    console.log('****');
    console.log('*****');
    console.log("Server is running on port 1337");
});

//npm run dev