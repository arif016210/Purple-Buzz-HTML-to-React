import React from 'react';

import pricing from '../../assets/img/pricing.svg';
import OurPricing from '../../Components/Pricing/OurPricing/OurPricing';
import PricingPackage from '../../Components/Pricing/PricingPackage/PricingPackage';
import PricingComponent from '../../Components/Pricing/Pricing/Pricing'
import Footer from '../../Components/SharedComponents/Footer/Footer';
import NavBar from '../../Components/SharedComponents/NavBar/NavBar';

const Pricing = () => {

    document.title = "Purple Buzz - Pricing"

    return (
        <div>


            {/* <!-- Header --> */}
            <NavBar></NavBar>
            {/* <!-- Close Header -->


    <!-- Start pricing --> */}
            <div class="container-lg py-5">
                <div class="col-md-12 m-auto text-center py-5">
                    <h1 class="pricing-header h2 semi-bold-600">Pricing</h1>
                    <p class="pricing-footer">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.
            </p>
                </div>


                <div class="row px-lg-3">

                    <PricingPackage title="Free Plan" titlePrice="$0" user="5 Users" space="2 TB space" feature1="Community Forums" feature2="Email Support" ></PricingPackage>

                    <PricingPackage title="Standard Plan" titlePrice="$120/Year" user="25 to 99 Users" space="10 TB space" feature1="Source Files" feature2="Live Chat" ></PricingPackage>

                    <PricingPackage title="Enterprise" titlePrice="$840/Year" user="100 users or more" space="80 TB space" feature1="Full Access Sources" feature2="Live Chat" ></PricingPackage>

                </div>
            </div>
            {/* <!-- End Content -->

    <!-- Start Pricing Horizontal Section --> */}
            <section class="bg-light pt-sm-0 py-5">
                <div class="container py-5">

                    <h1 class="h2 semi-bold-600 text-center mt-2">Our Pricing</h1>
                    <p class="text-center pb-5 light-300">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</p>

                    {/* <!-- Start Pricing Horizontal --> */}
                    <OurPricing title="Free Plan" titlePrice="$0" user="5 Users" space="2 TB space" feature1="Community Forums" ></OurPricing>
                    {/* <!-- End Pricing Horizontal -->

            <!-- Start Pricing Horizontal --> */}
                    <OurPricing title="Standard Plan" titlePrice="$120/Year" user="25 to 99 Users" space="10 TB space" feature1="Source Files" feature2="Live Chat" ></OurPricing>
                    {/* <!-- End Pricing Horizontal -->

            <!-- Start Pricing Horizontal --> */}
                    <OurPricing title="Enterprise" titlePrice="$840/Year" user="100 users or more" space="80 TB space" feature1="Full Access Sources" feature2="Live Chat" ></OurPricing>
                    {/* <!-- End Pricing Horizontal --> */}

                </div>
            </section>
            {/* <!--End Pricing Horizontal Section--> */}

            <section class="container py-5">

                <h1 class="h2 semi-bold-600 text-center pt-5">Pricing</h1>
                <p class="text-center pb-5 light-300">
                    Vector illustration from <a rel="nofollow" href="w" target="_blank">StorySet</a>.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.
        </p>

                <div class="row d-flex align-items-center pb-5">

                    <div class="col-lg-6 offset-lg-0 col-md-8 offset-md-2">
                        <img class="rounded float-right" src={pricing} alt="" />
                    </div>

                    <div class="col-lg-6">

                        {/* <!-- Start Pricing List --> */}
                        <PricingComponent title="Free" price="$0" ></PricingComponent>
                        {/* <!-- End Pricing List --> */}

                        {/* <!-- Start Pricing List --> */}
                        <PricingComponent title="Standard" price="$120/Year" ></PricingComponent>
                        {/* <!-- End Pricing List --> */}

                        {/* <!-- Start Pricing List --> */}
                        <PricingComponent title="Enterprise" price="$840/Year" ></PricingComponent>
                        {/* <!-- End Pricing List --> */}
                        <p class="text-center"><a class="btn px-4 mt-4 mx-auto btn-outline-primary" href="w">Get Now</a></p>

                    </div>
                </div>
            </section>


            {/* <!-- Start Footer --> */}
            <Footer></Footer>
            {/* <!-- End Footer --> */}




        </div>
    );
};

export default Pricing;