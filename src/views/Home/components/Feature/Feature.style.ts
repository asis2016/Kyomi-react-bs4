import styled from "styled-components";
import {DefaultStyle} from "../../../../assets/style";
import {Container} from "react-bootstrap";

export const FeatureStyle = styled.div`
  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  background: #fff !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .row-two {
    padding: 50px 0px;
  }

  .row-two .card {
    border-color: transparent;
  }

  .row-two .card-body {
    border-radius: 3px;
    background-size: cover;
    background-position: center;
    min-height: 350px;
  }

  .row-two .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.4;
    z-index: 1;
  }

  .row-two .content {
    padding: 70px 20px 20px 20px;
    position: relative;
    z-index: 2;
  }

  .row-two h4 {
    color: ${DefaultStyle.quaternary};
  }
`;