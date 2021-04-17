import React from 'react';
import Aim from '../../Components/About/Aim/Aim';

// Components
import Banner from '../../Components/About/Banner/Banner';
import Choice from '../../Components/About/Choice/Choice';
import Content from '../../Components/About/Content/Content';
import Creative from '../../Components/About/Creative/Creative';
import OurTeam from '../../Components/About/OurTeam/OurTeam';
import Partner from '../../Components/About/Partner/Partner';
import Footer from '../../Components/SharedComponents/Footer/Footer';
import NavBar from '../../Components/SharedComponents/NavBar/NavBar';

const About = () => {

    document.title = "Purple Buzz - About"

    return (
        <div>


            {/* <!-- Header --> */}
            <NavBar></NavBar>
            {/* <!-- Close Header --> */}

            {/* <!-- Start Banner Hero --> */}
            <Banner></Banner>
            {/* <!-- End Banner Hero --> */}

            {/* <!-- Start Team Member --> */}
            <OurTeam></OurTeam>
            {/* <!-- End Team Member --> */}

            {/* <!-- Start Our Partner --> */}
            <Partner></Partner>
            {/* <!--End Our Partner--> */}

            {/* <!-- Start Progress --> */}
            <Creative></Creative>
            {/* <!-- End Progress --> */}

            {/* <!-- Start Choice --> */}
            <Choice></Choice>
            {/* <!-- End Choice --> */}

            {/* <!-- Start Aim --> */}
            <Aim></Aim>
            {/* <!-- End Aim --> */}

            {/* <!-- Start Contact --> */}
            <Content></Content>
            {/* <!-- End Contact --> */}

            {/* <!-- Start Footer --> */}
            <Footer></Footer>
            {/* <!-- End Footer --> */}


        </div>
    );
};

export default About;