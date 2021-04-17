import React from 'react';

const OurPricing = ({ title, titlePrice, user, space, feature1, feature2 }) => {
    return (
        <div class="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white mb-5">
            <div class="pricing-horizontal-icon col-md-3 text-center bg-secondary text-light py-4">
                <i class="display-1 bx bx-package pt-4"></i>
                <h5 class="h5 semi-bold-600 pb-4 light-300">{title}</h5>
            </div>
            <div class="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
                <ul class="text-left px-4 list-unstyled mb-0 light-300">
                    <li><i class="bx bxs-circle me-2"></i> {user} </li>
                    <li><i class="bx bxs-circle me-2"></i> {space} </li>
                    <li><i class="bx bxs-circle me-2"></i> {feature1} </li>
                    <li><i class="bx bxs-circle me-2"></i> {feature2} </li>
                </ul>
            </div>
            <div class="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
                <div class="w-100 light-300">
                    <p> {titlePrice} </p>
                    <a href="w" class="btn rounded-pill px-4 btn-outline-primary mb-3">Get Now</a>
                </div>
            </div>
        </div>
    );
};

export default OurPricing;