import React, {FC} from 'react'
import {MasterHeaderStyleThreeBase} from "./MasterHeaderStyleThree.style";
import {VideoTag} from 'react-video-tag'


interface IProps {
    title: string;
    subTitle: string;
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
                        {props.title}
                    </h1>
                    <h2>{props.subTitle}</h2>
                    <a className="btn btn-primary-kyomi btn-lg mt-3" href="#">
                        <i className="fas fa-map-marked-alt"></i> &nbsp; Start Exploring
                    </a>
                </div>
            </div>
        </div>

    </MasterHeaderStyleThreeBase>
}