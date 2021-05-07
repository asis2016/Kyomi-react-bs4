import styled from "styled-components";
import {DefaultStyle} from "../../../../assets/style";

export const MainHeaderBase = styled.div`
  position: relative;
  background-color: black;
  height: calc(100vh - 160px);
  width: 100%;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .container {
    position: relative;
    z-index: 2;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.3;
    z-index: 1;
  }

  h1 {
    color: ${DefaultStyle.quaternary};
  }

  h2 {
    font-size: 3rem;
    color: ${DefaultStyle.quaternary};
    font-family: ${DefaultStyle.subTitleFont};
  }

  .btn-primary-kyomi {
    font-size: 1.2rem;
  }

`;