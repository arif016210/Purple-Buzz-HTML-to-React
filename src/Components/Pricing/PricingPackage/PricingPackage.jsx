import React from 'react';

const PricingPackage = ({ title, titlePrice, user, space, feature1, feature2 }) => {
    return (
        <div class="col-md-4 pb-5 pt-sm-0 mt-5 px-xl-3">
            <div class="pricing-table card h-100 shadow-sm border-0 py-5">
                <div class="pricing-table-body card-body rounded-pill text-center align-self-center p-md-0">
                    <i class="pricing-table-icon display-3 bx bx-package text-secondary"></i>
                    <h2 class="pricing-table-heading h5 semi-bold-600">{title}</h2>
                    <p>{titlePrice}</p>
                    <ul class="pricing-table-body text-start text-dark px-4 list-unstyled light-300">
                        <li><i class="bx bxs-circle me-2"></i> {user} </li>
                        <li><i class="bx bxs-circle me-2"></i> {space} </li>
                        <li><i class="bx bxs-circle me-2"></i> {feature1} </li>
                        <li><i class="bx bxs-circle me-2"></i> {feature2} </li>
                    </ul>
                    <div class="pricing-table-footer pt-5">
                        <a href="w" class="btn rounded-pill px-4 btn-outline-primary light-300">Get Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPackage;