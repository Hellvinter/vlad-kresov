import React from 'react';

import Header from '../components/main/header';
import Navigation from './main/navigation';
import MyProfile from './main/profile/myProfile';
import PortfoliProjectsList from './main/portfolioList';
import Abilities from './main/abilities';
import WorkExpirience from './main/expirience';
import Footer from './main/footer';

function App() {

    return (
       
        <div className="App grid__container">
            <Header />
            <Navigation />
            <main className='grid-mainWrapper'>
                <MyProfile />
                <PortfoliProjectsList />
                <Abilities />
                <WorkExpirience />
                <Footer />   
            </main>
        </div>
        
    );
}

export default App;