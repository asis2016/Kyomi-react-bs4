import React from 'react';
import {AppBase} from './App.style';
import {Col, Container, Nav, NavDropdown, Row} from "react-bootstrap";
import {TopNavigationStyleOne} from "./components/TopNavigationStyleOne/TopNavigationStyleOne";
import {NavigationStyleThree} from "./components/NavigationStyleThree/NavigationStyleThree";
import {SpecialOfferStyleOne} from "./components/SpecialOfferStyleOne/SpecialOfferStyleOne";
import {FeatureStyleFive} from "./components/FeatureStyleFive/FeatureStyleFive";
import {FooterMenuStyleThree} from "./components/FooterMenuStyleThree/FooterMenuStyleThree";

const App: React.FC = () => {

    return <AppBase>

        {/* Top navigation style one */}
        <TopNavigationStyleOne/>

        {/* Navigation style three */}
        <NavigationStyleThree navbarBrand={"yo"}/>

        {/* Special offer style one */}
        <SpecialOfferStyleOne title={"Donec et mi dapibus nisl venenatis commodo vitae nulla. Code: 121212"}
                              href={"#"}
                              faIcon={"gifts"}/>

        {/* Feature style five */}
        <FeatureStyleFive title={"Fringilla Everest 2019"}
                          caption={`Nulla luctus libero a risus auctor efficitur.
                            Suspendisse nec nulla in leo lacinia sodales.
                            Morbi auctor nulla euismod turpis faucibus, eget dignissim odio pharetra.
                          `}
                          subTitle={"vitae maximus nulla"}/>

        {/* Footer menu style 3*/}
        <FooterMenuStyleThree title={"Donec et mi dapibus nisl"} subTitle={"Donec et mi dapibus nisl"}/>


    </AppBase>
};

export default App;
