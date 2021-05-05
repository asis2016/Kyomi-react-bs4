import styled from "styled-components";
import {DefaultStyle} from "../../../assets/style";

export const ButtonAuthorStyle = styled.div`
  a {
    color: ${DefaultStyle.primary} !important;

    &:hover {
      text-decoration: none;
      font-weight: bold;
    }
  }
`;