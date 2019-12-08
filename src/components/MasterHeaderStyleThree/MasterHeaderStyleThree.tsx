import React, {FC} from 'react'
import {MasterHeaderStyleThreeBase} from "./MasterHeaderStyleThree.style";
import {videoTagString, VideoTag} from 'react-video-tag'


interface IProps {
    title?: string;
}

export const MasterHeaderStyleThree: FC<IProps> = (props) => {
    return <MasterHeaderStyleThreeBase>
        <div className="overlay"></div>
        <VideoTag src={"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"}
                  type={"video/mp4"}
                  autoPlay={true}
                  loop={true}/>
        <div className="container h-100">
            <div className="d-flex text-center h-100">
                <div className="my-auto w-100 text-white">
                    <h1 className="display-1">
                        नमस्ते नेपाल
                    </h1>
                    <h2>Welcome to Nepal. The land of Himalayas.</h2>
                    <a className="btn btn-primary-kyomi btn-lg mt-3" href="#">
                        <i className="fas fa-map-marked-alt"></i> &nbsp; Start Exploring
                    </a>
                </div>
            </div>
        </div>

    </MasterHeaderStyleThreeBase>
}