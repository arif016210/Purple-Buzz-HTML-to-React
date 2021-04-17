import React from 'react';
import { Router } from "@reach/router";
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Pricing from '../Pages/Pricing/Pricing';
import Work from '../Pages/Work/Work';
import NotFound from '../Pages/NotFound/NotFound';

const PageRoute = () => {
    return (

        <Router>


            <Home path="/home"></Home>
            <About path="/about"></About>
            <Work path="/work" ></Work>
            <Pricing path="/pricing" ></Pricing>
            <Contact path="/contact" ></Contact>
            <Home path="/"></Home>
            <NotFound path="*" ></NotFound>

        </Router>

    );
};

export default PageRoute;