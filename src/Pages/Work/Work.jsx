import React from 'react';

import ourWork1 from '../../assets/img/our-work-01.jpg';
import ourWork2 from '../../assets/img/our-work-02.jpg';
import ourWork3 from '../../assets/img/our-work-03.jpg';
import ourWork4 from '../../assets/img/our-work-04.jpg';
import ourWork5 from '../../assets/img/our-work-05.jpg';
import ourWork6 from '../../assets/img/our-work-06.jpg';



import Footer from '../../Components/SharedComponents/Footer/Footer';
import NavBar from '../../Components/SharedComponents/NavBar/NavBar';
import Banner from '../../Components/Work/Banner/Banner';
import Feature from '../../Components/Work/Feature/Feature';
import OurWork from '../../Components/Work/OurWork/OurWork';

const Work = () => {

    document.title = "Purple Buzz - Work"
    return (
        <div>

            {/* <!-- Header --> */}
            <NavBar></NavBar>
            {/* <!-- Close Header -->


            <!-- Start Banner Hero --> */}
            <Banner></Banner>
            {/* <!-- End Banner Hero -->

    <!-- Start Our Work --> */}
            <section class="container py-5">
                <div class="row justify-content-center my-5">
                    <div class="filter-btns shadow-md rounded-pill text-center col-auto">
                        <a class="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4 active" data-filter=".project" href="w">All</a>
                        <a class="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".business" href="w">Business</a>
                        <a class="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".marketing" href="w">Marketing</a>
                        <a class="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".social" href="w">Social Media</a>
                        <a class="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".graphic" href="w">Graphic</a>
                    </div>
                </div>

                <div class="row projects gx-lg-5">
                    <a href="work-single.html" class="col-sm-6 col-lg-4 text-decoration-none project marketing social business mb-5">
                        <OurWork title="Digital Marketing" img={ourWork1}></OurWork>
                    </a>

                    <a href="work-single.html" class="col-sm-6 col-lg-4 text-decoration-none project graphic social mb-5">
                        <OurWork title="Corporate Branding" img={ourWork2}></OurWork>
                    </a>

                    <a href="work-single.html" class="col-sm-6 col-lg-4 text-decoration-none project marketing graphic business mb-5">
                        <OurWork title="Leading Digital Solution" img={ourWork3}></OurWork>
                    </a>

                    <a href="work-single.html" class="col-sm-6 col-lg-4 text-decoration-none project social business mb-5">
                        <OurWork title="Smart Applications" img={ourWork4}></OurWork>
                    </a>

                    <a href="work-single.html" class="col-sm-6 col-lg-4 text-decoration-none project marketing mb-5">
                        <OurWork title="Corporate Stationary" img={ourWork5}></OurWork>
                    </a>

                    <a href="work-single.html" class="col-sm-6 col-lg-4 text-decoration-none project marketing graphic mb-5">
                        <OurWork title="8 Financial Tips" img={ourWork6}></OurWork>
                    </a>

                </div>
                <div class="row">
                    <div class="btn-toolbar justify-content-center pb-4" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary text-white">Previous</button>
                        </div>
                        <div class="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" class="btn btn-light">1</button>
                        </div>
                        <div class="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" class="btn btn-secondary text-white">2</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Third group">
                            <button type="button" class="btn btn-secondary text-white">Next</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Our Work -->

            <!-- Start Feature Work --> */}
            <Feature></Feature>
            {/* <!-- End Feature Work -->


        <!-- Start Footer --> */}
            <Footer></Footer>
            {/* <!-- End Footer --> */}




        </div>
    );
};

export default Work;