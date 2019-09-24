import React from 'react';

import {social, contacts, afterWord} from '../../Data/profile';

function Footer () {

    // function displaying my social media
    const Social = () => {
        return(
            social.map((item, index) => (
                <a  key={index}
                    className='footer__contacts__link' 
                    href={item.social}
                    target='_blank'
                >
                    <img src={item.media} />
                </a>
            ))
        );
    }

    // function displaying my email
    const Email = () => {
        return(
            contacts.map((item, index) => (
                <React.Fragment>
                <a href={`mailto:${item.email}`}>
                    <h4 key={index} 
                        className='footer__contacts__email'
                    >
                        {item.email}
                    </h4>
                </a>
                </React.Fragment>
            ))
        );
    }

    return (
        <footer id='contact' className='footer grid-footer'>
            <div className='footer__heading-container'>
                <h2 className='footer__heading'>Contacts</h2>
                <p className='footer__punchLine'>
                    "It's not a bug... it's a feature"
                </p>
            </div>
            <div className='footer__afterword'>
                <p>{afterWord.text}</p>
                <a  href={afterWord.sourceCodeLink}
                    target='_blank'
                    className='portfolioList__link-code resume-code'
                >
                    Link to sourse code of resume
                </a>
            </div>
            <h3 className='footer__hireMe'>Contacts for hiring me</h3> 
            <div className='footer__contacts'>
                <Social />
                <Email />
            </div>
            <p className="veryLastWords">{afterWord.lastWord}</p>
        </footer>
    );
}

export default Footer; 