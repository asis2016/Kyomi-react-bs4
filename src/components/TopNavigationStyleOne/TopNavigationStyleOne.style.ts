import styled from "styled-components";
import {DefaultStyle} from "../../assets/style";


export const TopNavigationStyleOneBase = styled.div`

  background-color: ${DefaultStyle.primaryDark};
  height: 40px;
  
  .nav-link{
    color: ${DefaultStyle.quaternary};
  }
  
  .col-four .nav{
    float: right;
  }
  
  .col-four .nav-link{
    padding-left: 0px;
  }

`;