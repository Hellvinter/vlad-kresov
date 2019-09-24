import React from 'react';

import {links} from '../../Data/profile';

import {Link} from 'react-scroll';

function Navigation () {

    const Nav = () => {
        return (
            links.map((item, index) => (
                <li 
                    className='navigation__item' 
                    key={index}
                >
                    <Link 
                        className='navigation__link'
                        activeClass='current' 
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-5}
                        duration={300}
                    >
                        {item.name}
                    </Link>
                </li>
            ))
        );
    }

    return (
        <nav className='navigation grid-navigation'>
            <ul   className="navigation__ul">
                <Nav  />
            </ul>
        </nav>
    );
}

export default Navigation;

