import React from 'react';
import banner1 from '../../../assets/img/banner-img-01.svg'


const Banner = () => {
    return (
        <section class="bg-light">
            <div class="container py-4">
                <div class="row align-items-center justify-content-between">
                    <div class="contact-header col-lg-4">
                        <h1 class="h2 pb-3 text-primary">Contact</h1>
                        <h3 class="h4 regular-400">Elit, sed do eiusmod tempor</h3>
                        <p class="light-300">
                            Vector illustration is from <a rel="nofollow" href="h" target="_blank">StorySet</a>.
                Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
                    </div>
                    <div class="contact-img col-lg-5 align-items-end col-md-4">
                        <img src={banner1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;