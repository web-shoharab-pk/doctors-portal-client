import React from 'react';
import './Appoinment.css';
import drImage from '../../images/dr-image-rv-bg.png'

const Appoinment = () => {
    return (
        <section className="appoinment-container container ">
            <div className="row chaild-app-container">
                <div className="col-md-5">
                    <div className="appoinmentDoctor w-75">
                        <img src={drImage} alt="" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="d-flex align-items-center justify-content-center mx-5 mt-5 p-5">
                        <div>
                            <h4 className="text-info">APPOINMENT</h4>
                            <h1>Make Appoinment Today</h1>
                            <button className="btn btn-info">Learn more</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Appoinment;