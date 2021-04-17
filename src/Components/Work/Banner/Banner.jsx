import React from 'react';

const Banner = () => {
    return (
        <div id="work_banner" class="banner-wrapper bg-light w-100 py-5">
            <div class="banner-vertical-center-work container text-light d-flex justify-content-center align-items-center py-5 p-0">
                <div class="banner-content col-lg-8 col-12 m-lg-auto text-center">
                    <h1 class="banner-heading h2 display-3 pb-5 semi-bold-600 typo-space-line-center">Our Work</h1>
                    <h3 class="h4 pb-2 regular-400">Elit, sed do eiusmod tempor incididunt</h3>
                    <p class="banner-body pb-2 light-300">
                        Vector illustration <a class="text-white" href="w" target="_blank">Freepik</a>.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus.
                </p>
                    <button type="submit" class="btn rounded-pill btn-outline-light px-4 me-4 light-300">Learn More</button>
                    <button type="submit" class="btn rounded-pill btn-secondary text-light px-4 light-300">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;