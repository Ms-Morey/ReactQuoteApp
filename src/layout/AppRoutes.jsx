import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../components/Home";
import AllQuotes from "../components/AllQuotes";
import CreateQuote from "../components/CreateQuote";

export let routes = createBrowserRouter([
    {
        path : "/", 
        element : <Login/>
    },
    {
        path : "/signup", 
        element : <SignUp/>
    },
    {
        path : "/home", 
        element : <Home/>,
        children : [
            {
                path : "/home", 
                element : <AllQuotes/>
            }, 
            {
                path : "/home/create", 
                element : <CreateQuote/>
            }
        ]
    }
])




















// how to install
// npm i json-server
// how to run the server 
// npx json-server --watch backend/db.json --port=3000