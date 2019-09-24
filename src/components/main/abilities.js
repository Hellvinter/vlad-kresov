import React from 'react';

import {skills, languages} from '../../Data/profile';

import {FaEmpire} from 'react-icons/fa/index';

function Abilities() {
    
    const Stars = (totalStars) => {
        return (
            <span className='empireContainer'>
            {[...Array(totalStars)].map((index) => (
                <FaEmpire className='empireContainer-stars' key={index}/> 
            ))}
            </span>
        );
    }

    const SkillsRender = () => {
        return (skills.map(item => (
            <li className='abilities__item'>
                <div className='abilities__item-skillContainer'>
                    {item.skill} {Stars(item.number)}
                </div>   
            </li>
        )));
    }

    const LanguagesRender = () => {
        return (languages.map(item => (
            <li className='abilities__item'>
                <div className='abilities__item-skillContainer'>
                    {item.lang} {Stars(item.number)}
                </div> 
            </li>
        )));
    } 

    return (
        <section id='abilities' className="abilities grid-abilities">
            <h2 className='abilities__heading'>
                My Abilities 
            </h2>
            <h3 className='abilities__subHeading'>
                Skills 
            </h3>
            <ul className='abilities__ul abilities__skills'>
                <SkillsRender />
            </ul>
            <h3 className='abilities__subHeading'>
                Langueges
            </h3>
            <ul className='abilities__ul abilities__languages'>
                <LanguagesRender />
            </ul>
            <h3 className='abilities__subHeading'>Education</h3>
            <div className='abilities__education'>
                <a  href="https://www.freecodecamp.org/"
                    target='_blank'
                >
                freeCodeCamp
                </a>
                <p>2018-2019</p>
                
            </div>
        </section>
    );
}

export default Abilities;
