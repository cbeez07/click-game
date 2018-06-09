import React from 'react';

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top">
        <ul className="navbar-nav w-100 text-center">
            <li className="navbar-brand col-4">
                <a className="text-white h3" href='/'>Clicky Game</a>
            </li>
            <li className='nav-item col-4 h4 text-white'>
                {props.message}
            </li>
            <li className='nav-item col-4 h4 text-white'>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>

);

export default Navbar;