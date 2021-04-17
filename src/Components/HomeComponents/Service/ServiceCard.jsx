import React from 'react';

const ServiceWork = ({ title, img }) => {



    return (
        <div className="col-xl-3 col-md-4 col-sm-6 project ui branding">
            <a href="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                <img className="service card-img" src={img} alt="Card image" />
                <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                    <div className="service-work-content text-left text-light">
                        <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">{title}</span>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ServiceWork;