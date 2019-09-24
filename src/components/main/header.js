import React from 'react';

import {Link} from 'react-scroll';

import '../../img/bg/Ciri_with_Geralt1920x1080.png';
import {FaChevronDown} from 'react-icons/fa';

function Header () {
    return (
        <header className='header grid-header'>
            <div className='header__overlay'></div>
            <div className='header__heading'>
                <h1 className='header__heading-name'>
                    Vlad Kresov
                </h1>
                <p className='header__heading-subHeading'>
                    Interactive portfolio
                </p>
            </div>
            <div className='header__toContent'>
                <Link 
                    to={'profile'}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                >
                    <FaChevronDown className="header__toContent-arrow" />
                </Link>
            </div>
        </header>
    );
}

export default Header;