import React from 'react';
import Appoinment from './Appoinment/Appoinment';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <Appoinment></Appoinment> 
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;