import {Link} from 'react-router-dom';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"><h1><ReactTypingEffect eraseDelay="20000" text={["Home."]}/></h1></Link>
            <div className="internal-links">
                <Link to="/about">About</Link>
            </div>

        </nav>
     );
}
 
export default Navbar;