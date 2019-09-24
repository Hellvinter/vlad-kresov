import React from 'react';

import {social, contacts} from '../../../Data/profile';

function Contacts () {
    
    // function displaying my social media
    const Social = () => {
        return(
            social.map((item, index) => (
                <React.Fragment>
                    <a  key={index}
                        className='profile-contacts__link' 
                        href={item.social}
                        target='_blank'
                    >
                        <img src={item.media} />
                    </a>
                </React.Fragment>
            ))
        );
    }

    // function displaying my email
    const Email = () => {
        return(
            contacts.map((item, index) => (
                <React.Fragment>
                    <a key={index} href={`mailto:${item.email}`}>
                        <h4  
                            className='profile-contacts__email'
                        >
                            {item.email}
                        </h4>
                    </a>
                </React.Fragment>
            ))
        );
    }

    // combine all functions from above in one
    // component
    return (
        <div className='profile-contacts'>
                <Social />
                <Email /> 
        </div>
    );
}

export default Contacts;
