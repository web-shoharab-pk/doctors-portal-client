import React from 'react';
import doctorSmImg from '../../images/doctor-sm.png'
import Doctors from './Doctors';

const doctors = [
    {
        image: doctorSmImg,
        name: 'Dr. Numan',
        phone: '+1258963741'
    },
    {
        image: doctorSmImg,
        name: 'Dr. Ajam',
        phone: '+124563789'
    },
    {
        image: doctorSmImg,
        name: 'Dr. Sirajul',
        phone: '+1258741369'
    }
] 

const OurDoctors = () => {
    return (
        <section className=" container my-5">
            <h2 className="text-center text-info">OUR DOCTORS</h2> 
            <div className="row">
                {
                    doctors.map(info => <Doctors info={info} />)
                }
            </div> 
            
        </section>
    );
};

export default OurDoctors;