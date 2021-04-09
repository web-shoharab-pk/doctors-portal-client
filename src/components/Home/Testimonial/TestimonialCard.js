import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({info}) => {
    console.log(info);
    return (
        <div className="col-md-4 mt-3">
            <div className="p-3  text-center card">
                <p>{info.description}</p>
                <div className="d-flex justify-content-evenly">
                <img style={{width: '80px'}} src={info.image} alt="" />
                    <div>
                        <h2 className="text-info">{info.name}</h2>
                        <h3>{info.location}</h3>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default TestimonialCard;