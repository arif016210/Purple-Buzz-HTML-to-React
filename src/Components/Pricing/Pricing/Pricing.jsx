import React from 'react';

const Pricing = ({ title, price }) => {
    return (
        <div class="pricing-list shadow-sm rounded-top rounded-3 py-sm-0 py-5">
            <div class="row p-2">
                <div class="pricing-list-icon col-3 text-center m-auto text-secondary ml-5 py-2">
                    <i class="display-3 bx bx-package"></i>
                </div>
                <div class="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                    <ul class="list-unstyled text-center light-300">
                        <li class="h5 semi-bold-600 mb-0 mt-3">{title}</li>
                        <li>Deserunt mollit laborum.</li>
                    </ul>
                </div>
                <div class="pricing-list-footer col-4 text-center m-auto align-items-center">
                    <a href="w" class="btn rounded-pill px-4 btn-primary light-300"> {price} </a>
                </div>
            </div>
        </div>
    );
};

export default Pricing;