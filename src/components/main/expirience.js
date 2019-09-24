import React from 'react';

import { expirience } from '../../Data/profile';

function WorkExpirience () {

    return (
        <section id='expirience' className='expirience grid-expirience'>
            <h2 className='expirience__title'> Expirience </h2>
            <h3>
                Self-employed software developer
            </h3>
            <h4 className='expirience__subTitle'>september 2018 - current</h4>
            <div className='expirience__wrapper'>
                <p className='expirience__paragraph'>{expirience.firstParagraph}</p>
                <br />
                <p className='expirience__paragraph'>{expirience.secondParagraph}</p>
                <br />
                <p className='expirience__paragraph'>{expirience.thirdParagraph}</p>
                <br />
                <p className='expirience__paragraph'>{expirience.fourthParagraph}</p>
                <br />
                <p className='expirience__paragraph'>{expirience.fifthParagraph}</p>
                <br />
            </div>
        </section>
    )

}

export default WorkExpirience;
