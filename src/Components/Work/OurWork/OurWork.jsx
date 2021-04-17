import React from 'react';


const OurWork = ({ title, img }) => {
    return (

        <div class="service-work overflow-hidden card mb-5 mx-5 m-sm-0">
            <img class="card-img-top" src={img} alt="..." />
            <div class="card-body">
                <h5 class="card-title light-300 text-dark"> {title} </h5>
                <p class="card-text light-300 text-dark">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolor.
                        </p>
                <span class="text-decoration-none text-primary light-300">
                    Read more <i class='bx bxs-hand-right ms-1'></i>
                </span>
            </div>

        </div>





    );
};

export default OurWork;