import styled from "styled-components";
import { CssPropsType } from "../../utils/styled-prop-model";

export const Button = styled.button<CssPropsType>`
  outline: none;
  border: none;
  width: max-content;
  background: transparent;
`;

export const StyledNav = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  background-color: #faf9f6;
  padding: 2.6rem;
  font-family: "";
`;
