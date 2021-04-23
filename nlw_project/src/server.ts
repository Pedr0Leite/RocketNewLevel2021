import { http } from "./http";
import "./websocket/client";

http.listen(1337, ()=>{
    console.log('*');
    console.log('**');
    console.log('***');
    console.log('****');
    console.log('*****');
    console.log("Server is running on port 1337");
});

//npm run dev