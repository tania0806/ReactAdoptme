import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        name: "Home",
        href: "/home",
    },
     {
        name: "Profile",
        href: "/profile",
    },
    
];

const NavBar = () => {
    return(
        <div> 
            {links.map(x => (
                <Link to={x.href}>{x.name}</Link>
            ))}
        </div>
    )
};

export default NavBar;
