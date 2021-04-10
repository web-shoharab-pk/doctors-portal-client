import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPhoneAlt} />

const Doctors = ({info}) => {
    return (
        <div className="col-md-4 text-center mt-5">
            <div>
                <img style={{width: '300px'}} src={info.image} alt="" /> <br />
                <h3 className="mt-3">{info.name}</h3>
                <p className="mt-3"> <span className="text-info" > {element}</span>  {info.phone}</p> 
            </div>
        </div>
    );
};

export default Doctors;