import React from 'react';

// import object with info about me
import {about} from '../../../Data/profile';

function AboutMe() {

    //JSX markup wich take info from aboutText
    return (
        <div className="profile__aboutMe">
            <h2 className="profile__aboutMe__heading">
                {about.heading}
            </h2>
            <p className="profile__aboutMe__text">
                {about.text}
            </p>
        </div>
    );

}

export default AboutMe;
