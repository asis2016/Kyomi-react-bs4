import React from "react";
import {HomeBase} from "./Home.style";
import {Blog, Portfolio} from "./components";

const Home = () => {
    return <HomeBase>
        <Portfolio/>
        <Blog/>
    </HomeBase>;
};

export default Home;
