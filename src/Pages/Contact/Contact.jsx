import React from 'react';
import Banner from '../../Components/Contact/Banner/Banner';
import Form from '../../Components/Contact/Form/Form';
import Footer from '../../Components/SharedComponents/Footer/Footer';
import NavBar from '../../Components/SharedComponents/NavBar/NavBar';

const Contact = () => {

    document.title = "Purple Buzz - Contact"

    return (
        <div>

            {/* <!-- Header --> */}
            <NavBar></NavBar>
            {/* <!-- Close Header --> */}


            {/* <!-- Start Banner Hero --> */}
            <Banner></Banner>
            {/* <!-- End Banner Hero --> */}


            {/* <!-- Start Contact --> */}
            <section class="container py-5">

                <h1 class="col-12 col-xl-8 h2 text-left text-primary pt-3">Create success campaign with us!</h1>
                <h2 class="col-12 col-xl-8 h4 text-left regular-400">Elit, sed do eiusmod tempor </h2>
                <p class="col-12 col-xl-8 text-left text-muted pb-5 light-300">
                    Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate.
                                        </p>


                <Form></Form>

            </section>
            {/* <!-- End Contact --> */}


            {/* <!-- Start Footer --> */}
            <Footer></Footer>
            {/* <!-- End Footer --> */}


        </div>
    );
};

export default Contact;