import React from "react";
import {HomeBase} from "./Home.style";
import {Blog, Feature, Navigation, Portfolio} from "./components";
import {SectionOffer} from "../../components/molecules";

const Home = () => {
    return <HomeBase>
        <Navigation/>
        <SectionOffer title={"We offer you to a commodo vitae nulla. Code: 2021-21."}
                      href={"#"}/>
        <Feature/>
        <Portfolio/>
        <Blog/>
    </HomeBase>;
};

export default Home;
