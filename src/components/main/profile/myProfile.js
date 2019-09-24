import React from 'react';

import AboutMe from './aboutMe';
import Name from './name';
import Contacts from './contacts';
import { interests } from '../../../Data/profile';

function MyProfile () {
    return (
        <section id='profile' className='my-profile grid-profile'>
            <div className="profile-subgrid">
                <div className='profile__heading'>
                <h2>
                    Profile
                </h2>
                <span>
                    <p>I'm breathtaking Software developer</p>
                    <p>(No my words, it's all Keanu ¯\_(ツ)_/¯)</p>
                </span>
                </div>
                <div className='profile-info'>
                    <AboutMe />
                    <Name />
                    <Contacts />
                </div>
                <div className='profile__interests'>
                    <h3 className='profile__interests__heading'>
                        Interests
                    </h3>
                    <p className='profile__interests__text'>
                       {interests.text} 
                    </p>
                </div>
            </div>
            
        </section>

    );
}

export default MyProfile;