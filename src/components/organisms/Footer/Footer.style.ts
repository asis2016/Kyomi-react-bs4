import styled from "styled-components";
import footerBG from '../../../assets/images/footer-bg.png'


export const FooterBase = styled.div`
  /*background-image: url("https://raw.githubusercontent.com/asis2016/kyomi-react-bootstrap4/master/src/assets/images/mountain.jpg");*/
  background-image: url(${footerBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  margin-top: 100px;
  padding-bottom: 150px;
  min-height: 300px;

  .row {
    margin-top: 150px;

    .col-one {
      padding-right: 50px;
    }
    

    .fa-heart:before{
      color: red;
    }
  }

  @media (min-width: 1199px) {
    min-height: 600px;
  } 

`;