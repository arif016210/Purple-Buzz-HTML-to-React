import React from 'react';
import bannar2 from '../../../assets/img/banner-img-02.svg';


const Banner = () => {
    return (
        <div>
            <section class="bg-light w-100">
                <div class="container">
                    <div class="row d-flex align-items-center py-5">
                        <div class="col-lg-6 text-start">
                            <h1 class="h2 py-5 text-primary typo-space-line">About Us</h1>
                            <p class="light-300">
                                Vector illustration credit goes to <a rel="nofollow" href="www.http://freepik.com/" target="_blank">FreePik</a> website. Purple Buzz is provided by TemplateMo. Lorem ipsum dolor sit amet, consectetur.
                    </p>
                        </div>
                        <div class="col-lg-6">
                            <img alt="" src={bannar2} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;