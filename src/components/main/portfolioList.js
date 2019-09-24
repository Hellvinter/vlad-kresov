import React from 'react';

import WeatherApp from '../../img/projects/react_weather_app.png';
import TodoList from '../../img/projects/react_todo.png';
import JapaneseInn from '../../img/projects/Japanese_inn.png';
import TravelAgency from '../../img/projects/Travel_agency.png';


function PortfolioProjectsList() {

    const projects = [
        {
            title: 'Weather App',
            subtitle: 'react project',
            projectImg: WeatherApp ,
            toServer: 'Watch live version',
            linkToServer: 'https://hellvinter.github.io/WeatherApp/',
            toCode: 'Watch code',
            linkToCode: 'https://github.com/Hellvinter/WeatherApp'
        },
        {
            title: 'Todo list',
            subtitle: 'react project',
            projectImg: TodoList,
            toServer: 'Watch live version',
            linkToServer: 'https://hellvinter.github.io/ReactTodoApp/',
            toCode: 'Watch code',
            linkToCode: 'https://github.com/Hellvinter/ReactTodoApp'
        },
        {
            title: 'Japanece inn',
            subtitle: 'static html page',
            projectImg: JapaneseInn,
            toServer: 'Watch live version',
            linkToServer: 'https://hellvinter.github.io/Japanese_inn/',
            toCode: 'Watch code',
            linkToCode: 'https://github.com/Hellvinter/Japanese_inn' 
        },
        {
            title: 'Travel agency',
            subtitle: 'static html page',
            projectImg: TravelAgency,
            toServer: 'Watch live version',
            linkToServer: 'https://hellvinter.github.io/Travel_agency/',
            toCode: 'Watch code',
            linkToCode: 'https://github.com/Hellvinter/Travel_agency' 
        }
    ];
    
    // function which will map project array
    const ProjectsMap = () => {
        return (
            projects.map(item => (
                <div className='portfolioList__card'>
                    <h4 className='portfoliList__title'>
                        {item.title}
                    </h4>
                    <p className='portfolioList__subtitle'>
                        {item.subtitle}
                    </p>
                    <div className='portfolioList__imgContainer'>
                        <img 
                            className='portfolioList__img'
                            src={item.projectImg} 
                            alt='project img'
                        />
                    </div>
                    <div className='portfolioList__linkContainer'>
                        <a 
                            className='portfolioList__link-server' 
                            href={item.linkToServer}
                            target='_blank'
                        >
                            {item.toServer}
                        </a>
                        <a 
                            className='portfolioList__link-code'
                            href={item.linkToCode}
                            target='_blank'
                        >
                            {item.toCode}
                        </a>
                    </div>
                </div>
            ))
        );
    }
    return (
        <section id='portfolioList' className='portfolioList grid-portfolioList'>
            <h2 className='portfolioList__heading'>
                Projects
            </h2>
            <div className='portfolioList__cardsSet'>
                <ProjectsMap />
            </div>
        </section>  
    );   
}

export default PortfolioProjectsList;