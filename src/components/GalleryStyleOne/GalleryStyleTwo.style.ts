import styled from "styled-components";
import {DefaultStyle} from "../../assets/style";

export const GalleryStyleTwoBase = styled.div`

  background-color: ${DefaultStyle.quaternary};
  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  h1, p{
    color: ${DefaultStyle.primary};
  }
  
  p,.sub-title{
    color: ${DefaultStyle.secondary};
  }

  .gallery{
    position: relative;
    display: inline;
    height: 150px;
    width: 150px;
  }
  
  .gallery-img{
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 2px;
    margin-bottom: 15px;
  }
  
  .badge{
    position: absolute;
    top: 60px;
    left: 15px;
  }
  
  

`;