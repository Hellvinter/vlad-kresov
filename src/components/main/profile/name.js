import React from 'react';

import {profile} from '../../../Data/profile';

// function displaying my personal data
function Name ()  {

    const PersonalData = () => {
        return (
            profile.map((item, index) => (
                <React.Fragment>
                    <h4>Name:</h4>
                    <p key={index}
                        className='profile-profileName__name'
                    >
                        {item.firstName}  {item.lastName} 
                    </p>
                    <h4>Age:</h4>
                    <p key={index}>
                       {item.age} 
                    </p>
                    <h4>Location:</h4>
                    <p key={index}>
                        {item.location}
                    </p>
                </React.Fragment>
            ))
        );
    }

    return (
        <div className="profile-profileName">
            <h2 className='profile-profileName__heading'>
                Details
            </h2>
            <PersonalData />
        </div>
    );
}

export default Name;