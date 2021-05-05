import React from 'react';
import {AppBase} from './App.style';
import {TopNavigationStyleOne} from "./components/TopNavigationStyleOne/TopNavigationStyleOne";
import {NavigationStyleThree} from "./components/NavigationStyleThree/NavigationStyleThree";
import {SpecialOfferStyleOne} from "./components/SpecialOfferStyleOne/SpecialOfferStyleOne";
import {FeatureStyleFive} from "./components/FeatureStyleFive/FeatureStyleFive";
import {FooterMenuStyleThree} from "./components/FooterMenuStyleThree/FooterMenuStyleThree";
import {MasterHeaderStyleThree} from "./components/MasterHeaderStyleThree/MasterHeaderStyleThree";
import GalleryStyleTwo from "./components/organisms/GalleryStyleTwo";
import Home from "./views/Home";


const App: React.FC = () => {
    return <AppBase>

        {/* todo refactor */}
        <Home/>


        {/* todo refactor -> move everything below into <Home /> */}
        {/* Top navigation style one */}
        <TopNavigationStyleOne/>

        {/* Navigation style three */}
        <NavigationStyleThree navbarBrand={"Kyomi Mountaineering"}/>

        {/* Master Head style three */}
        <MasterHeaderStyleThree title={"नमस्ते नेपाल"}
                                subTitle={"Welcome to Nepal. The land of Himalayas."}
        />

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

        {/* todo refactor this. */}
        {/* <Portfolio/>
        <Blog/>*/}

        {/* Gallery Style TWo*/}
        <GalleryStyleTwo title={"Quisque nec diam ac erat"}
                         caption={`Quisque nec diam ac erat varius luctus. Vivamus felis eros, accumsan 
        feugiat congue ut at leo. Curabitur accumsan placerat dapibus. Proin nec enim nec dui pretium
        at tellus non, vehicula egestas justo. `}
                         subTitle={"Sed cursus metus eget orci iaculis"}
        />

        {/* Footer menu style 3*/}
        <FooterMenuStyleThree title={"Donec et mi dapibus nisl"} subTitle={"Donec et mi dapibus nisl"}/>

    </AppBase>
};

export default App;
