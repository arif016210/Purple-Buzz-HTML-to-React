import React from 'react';

const WorkCard = ({ title, des, img }) => {

    return (
        <div className="col-md-4 mb-3">
            <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                <img className="recent-work-img card-img" src={img} alt="Card image" />
                <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                    <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                        <h3 className="card-title light-300">{title}</h3>
                        <p className="card-text"> {des} </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default WorkCard;