import styled from "styled-components";
import {DefaultStyle} from "../../assets/style";

export const BlogPostStyleThreeBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  .card{
    border: none;
  }
  
  .card-body{
    padding: 1.25rem 0px;
  }
  
  .price{
    color: ${DefaultStyle.primary} !important; 
  }

`;