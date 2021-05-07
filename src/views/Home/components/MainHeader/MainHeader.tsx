import React from 'react'
import {VideoTag} from 'react-video-tag'
import {MainHeaderBase} from "./MainHeader.style";
import {ButtonMain} from "../../../../components/atoms";


const MainHeader = ({title, subTitle}: MainHeaderProps): JSX.Element => {
    return <MainHeaderBase>
        <div className="overlay"></div>
        <VideoTag src={"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"}
                  type={"video/mp4"}
                  autoPlay={true}
                  loop={true}/>
        <div className="container h-100">
            <div className="d-flex text-center h-100">
                <div className="my-auto w-100 text-white">
                    <h1 className="display-1">
                        {title}
                    </h1>
                    <h2>{subTitle}</h2>
                    <ButtonMain faIcon={"fa-map-marked-alt"}
                                href={"#"}
                                title={"Start Exploring"}/>
                </div>
            </div>
        </div>
    </MainHeaderBase>
}

export default MainHeader