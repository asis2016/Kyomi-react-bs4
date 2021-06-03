import styled from "styled-components";
import {DefaultStyle} from "../../../../assets/style";

export const GalleryBase = styled.div`
  background-color: ${DefaultStyle.quaternary};
  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  h1,
  p {
    color: ${DefaultStyle.primary};
  }
`;
