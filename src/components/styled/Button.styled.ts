import styled from "styled-components";

interface Props {
  theme: {};
  pos?: boolean;
  auto?: boolean;
  top?: string;
}
export const Button = styled.button<Props>`
  outline: 0px;
  border: 0px;
  background: transparent;
`;
