import React from 'react';
import {AppBase} from './App.style';
import {TopNavigationStyleOne} from "./components/TopNavigationStyleOne/TopNavigationStyleOne";
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
        {/*<Navigation/>*/}

        {/* Master Head style three */}
        <MasterHeaderStyleThree title={"नमस्ते नेपाल"}
                                subTitle={"Welcome to Nepal. The land of Himalayas."}
        />

        {/* Special offer style one */}
        {/* <SectionOffer title={} href={}/>*/}

        {/*<Feature/>*/}
        {/* todo refactor this. */}
        {/*
        <Feature/>
        <Portfolio/>
        <Blog/>
        */}

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
