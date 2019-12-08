import styled from "styled-components";
import {DefaultStyle} from "../../assets/style";

export const GalleryStyleOneBase = styled.div`

  background-color: ${DefaultStyle.quaternary};
  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  
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