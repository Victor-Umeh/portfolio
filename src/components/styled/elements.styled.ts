import styled from "styled-components";

export const Button = styled.button<props: {}>`
  outline: none;
  border: none;
  width: max-content;
  background: transparent;
  ...${props}
`;

export const StyledNav = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  background-color: #faf9f6;
  padding: 2.6rem;
`;
