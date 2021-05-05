import styled from "styled-components";
import {DefaultStyle} from "../../../assets/style";

export const SectionBlockquoteStyle = styled.div`
  .row {
    height: 80px;
    background-color: ${DefaultStyle.secondary};
    color: ${DefaultStyle.quaternary};

    h4 {
      padding-top: 10px;
      color: ${DefaultStyle.quaternary};
    }
  }
`;