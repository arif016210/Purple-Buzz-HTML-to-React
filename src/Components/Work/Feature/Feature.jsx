import React from 'react';
import featureWork1 from '../../../assets/img/feature-work-1.jpg';
import featureWork2 from '../../../assets/img/feature-work-2.jpg';
import featureWork3 from '../../../assets/img/feature-work-3.jpg';
import featureWork4 from '../../../assets/img/feature-work-4.jpg';

const Feature = () => {
    return (
        <section class="bg-light py-5">
            <div class="feature-work container my-4">
                <div class="row d-flex d-flex align-items-center">
                    <div class="col-lg-5">
                        <h3 class="feature-work-title h4 text-muted light-300">Featured Work</h3>
                        <h1 class="feature-work-heading h2 py-3 semi-bold-600">Transform with us</h1>
                        <p class="feature-work-body text-muted light-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
                        <p class="feature-work-footer text-muted light-300">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div class="col-lg-6 offset-lg-1 align-left">
                        <div class="row">
                            <a class="col" data-type="image" data-fslightbox="gallery" href="./assets/img/feature-work-1-large.jpg">
                                <img class="img-fluid" src={featureWork1} alt="" />
                            </a>
                            <a class="col" data-type="image" data-fslightbox="gallery" href="./assets/img/feature-work-2-large.jpg">
                                <img class="img-fluid" src={featureWork2} alt="" />
                            </a>
                        </div>
                        <div class="row pt-4">
                            <a class="col" data-type="image" data-fslightbox="gallery" href="./assets/img/feature-work-3-large.jpg">
                                <img class="img-fluid" src={featureWork3} alt="" />
                            </a>
                            <a class="col" data-type="image" data-fslightbox="gallery" href="./assets/img/feature-work-4-large.jpg">
                                <img class="img-fluid" src={featureWork4} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;