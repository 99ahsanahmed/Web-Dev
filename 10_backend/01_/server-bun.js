import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url)
        if (url.pathname === "/") {
            return new Response ("home page" , {status:200})
        }
        else if (url.pathname === "/order") {
            return new Response("order succesfull", { status: 200 });
        }
        else{
            return new Response("404 : page not found", { status: 404 });
        }
    },
    port:3001,
    hostname:'127.0.0.1' 
})