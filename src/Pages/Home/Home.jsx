import React from 'react';

// Image Import

import service1 from '../../assets/img/services-01.jpg';
import service2 from '../../assets/img/services-02.jpg';
import service3 from '../../assets/img/services-03.jpg';
import service4 from '../../assets/img/services-04.jpg';
import service5 from '../../assets/img/services-05.jpg';
import service6 from '../../assets/img/services-06.jpg';
import service7 from '../../assets/img/services-07.jpg';
import service8 from '../../assets/img/services-08.jpg';

import ourWork1 from '../../assets/img/our-work-01.jpg';
import ourWork2 from '../../assets/img/our-work-02.jpg';
import ourWork3 from '../../assets/img/our-work-03.jpg';
import ourWork4 from '../../assets/img/our-work-04.jpg';
import ourWork5 from '../../assets/img/our-work-05.jpg';
import ourWork6 from '../../assets/img/our-work-06.jpg';
import Footer from '../../Components/SharedComponents/Footer/Footer';
import NavBar from '../../Components/SharedComponents/NavBar/NavBar';
import Banner from '../../Components/HomeComponents/Banner/Banner';
import WorkCard from '../../Components/HomeComponents/WorkCard/WorkCard';
import Service from '../../Components/HomeComponents/Service/Service';
import ServiceWork from '../../Components/HomeComponents/Service/ServiceCard';

const Home = () => {

    document.title = "Purple Buzz - Home"

    return (
        <div>
            {/*  Header */}
            <NavBar></NavBar>
            {/* Close Header */}

            {/* <!-- Start Banner Hero --> */}
            <Banner></Banner>
            {/* <!-- End Banner Hero --> */}

            {/* <!-- Start Service --> */}
            <Service></Service>

            <section className="container overflow-hidden py-5">
                <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">

                    {/* <!-- Start Sevice --> */}
                    <ServiceWork title="UI/UX Design" img={service1} ></ServiceWork>







                    <ServiceWork title="Social Work" img={service2} ></ServiceWork>

                    <ServiceWork title="Marketing" img={service3} ></ServiceWork>


                    <ServiceWork title="Graphic" img={service4} ></ServiceWork>



                    <ServiceWork title="Digtal Marketing" img={service5} ></ServiceWork>




                    <ServiceWork title="Market Research" img={service6} ></ServiceWork>


                    <ServiceWork title="Business" img={service7} ></ServiceWork>



                    <ServiceWork title="Branding" img={service8} ></ServiceWork>

                    {/* <!-- End Service --> */}

                </div>
            </section>

            {/* <!-- End Service --> */}

            {/* <!-- Start View Work --> */}
            <section className="bg-secondary">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-lg-2 col-12 text-light align-items-center">
                            <i className='display-1 bx bxs-box bx-lg'></i>
                        </div>
                        <div className="col-lg-7 col-12 text-light pt-2">
                            <h3 className="h4 light-300">Great transformations successful</h3>
                            <p className="light-300">Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                        <div className="col-lg-3 col-12 pt-4">
                            <a href="#" className="btn btn-primary rounded-pill btn-block shadow px-4 py-2"> View Our Work </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End View Work --> */}

            {/* <!-- Start Recent Work --> */}
            <section className="py-5 mb-5">
                <div className="container">
                    <div className="recent-work-header row text-center pb-5">
                        <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Recent Works</h2>
                    </div>
                    <div className="row gy-5 g-lg-5 mb-4">

                        {/* <!-- Start Recent Work --> */}

                        <WorkCard title="Social Media" des="Ullamco laboris nisi ut aliquip ex" img={ourWork1} ></WorkCard>

                        <WorkCard title="Web Marketing" des="Psum officia anim id est laborum." img={ourWork2} ></WorkCard>

                        <WorkCard title="R & D" des="Sum dolor sit consencutur" img={ourWork3} ></WorkCard>

                        <WorkCard title="Public Relation" des="Lorem ipsum dolor sit amet" img={ourWork4} ></WorkCard>

                        <WorkCard title="Branding" des="Put enim ad minim veniam" img={ourWork5} ></WorkCard>

                        <WorkCard title="Creative Design" des="Mollit anim id est laborum." img={ourWork6} ></WorkCard>

                        {/* <!-- End Recent Work --> */}

                    </div>
                </div>
            </section>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Footer --> */}
            <Footer></Footer>
            {/* <!-- End Footer --> */}

        </div>
    );
};

export default Home;