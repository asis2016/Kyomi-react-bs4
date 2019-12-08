import styled from "styled-components";
import {DefaultStyle} from "../../assets/style";

export const PortfolioStyleTwoBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  background: ${DefaultStyle.quaternary} !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .row-two{
    margin-top: 50px;
  }
  
  .row-two .col-one{
    background-size: cover;
    min-height: 600px;
    background-position: center;
  }
  
  img{
      border-radius: 50%;
      height: 200px;
      width: 200px;
      object-fit: cover;
      top:0;
  }
  
  .card{
    width: 20rem;
    border: none;
    text-align: center;
    background: transparent;
  }
  
  .carousel-indicators{
    display: none;
  }
  
  .fa-star{
    color: #ffaa04;
  }
  
  .row-three{
    height: 80px;
    background-color: ${DefaultStyle.secondary};
    color: ${DefaultStyle.quaternary};
  }
  
  .row-three h4{
    padding-top: 10px;
    color: ${DefaultStyle.quaternary};
  }
  
  .row-four .col-one{
    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;
  }
  
  .row-four .col-two{
    padding-top: 100px;
  }
  
  .row-four .col-two .videos{
    height: 400px;
  }

`;