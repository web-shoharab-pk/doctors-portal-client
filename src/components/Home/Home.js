import React from 'react';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
        </div>
    );
};

export default Home;