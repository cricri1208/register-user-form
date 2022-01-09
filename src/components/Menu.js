import React from "react";
import {NavLink} from "react-router-dom";
import "./Menu.css";

export const Menu = () =>{

    return(
        <nav className={"Menu"}>

                    <div>
                        <NavLink to="/">Home </NavLink>
                    </div>
                    <div>
                        <NavLink to="/form"> Form </NavLink>
                    </div>







        </nav>
    )
}
