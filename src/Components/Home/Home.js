import React, {Fragment, useState} from "react";
import { Redirect } from "react-router-dom";
import './Home.css';


const Home = () => {
    const [isLoggedout, setIsLoggedout] = useState(false);
    const logout = () => {
        localStorage.clear()
        setIsLoggedout(true);
    }
    let data = localStorage.userData && JSON.parse(localStorage.userData);
    
    

    return (
        
    <Fragment>
    <div class="card">
        <h1></h1>

  <p>Username:{data?.data?.userData?.username}</p>
  <p>Email:{data?.data?.userData?.email}</p>
  
  
</div>

        <div>
        {(!localStorage.userData || isLoggedout) && <Redirect to = "/"/>}
     <button onClick={logout}>logout</button>
     </div>
     </Fragment>
    );
    
  
}

export default Home;