import styled from "styled-components";
import {DefaultStyle} from "../../assets/style";


export const NavigationStyleThreeBase = styled.div`


  .navbar{
    background: ${DefaultStyle.primary};
    color: ${DefaultStyle.quaternary};
    height: 80px;
  }
  
  .navbar-brand{
      font-family: ${DefaultStyle.subTitleFont};
      font-size: 1.5rem;    
  }
  
  .navbar-brand .fas{
    font-size: 1.5rem;
    color: ${DefaultStyle.quaternary};
  }
  
  .navbar-brand, .nav-link{
    color: ${DefaultStyle.quaternary} !important;
  }

`;