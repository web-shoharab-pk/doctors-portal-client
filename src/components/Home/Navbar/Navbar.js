import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5 ">
                            <a className="nav-link active fw-bold" aria-current="page" href="#/">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link fw-bold active" href="#/">About</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link fw-bold active" href="#/">Dental services</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link text-light fw-bold" href="#/">Reviews</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link text-light fw-bold" href="#/">Blog</a>
                        </li>
                        <li className="nav-item me-5 text-light">
                            <a className="nav-link text-light fw-bold" href="#/">Contact Us</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;