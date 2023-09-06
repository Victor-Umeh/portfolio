import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.6rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.container};
  box-shadow: 0 0 5px -3px ${({ theme }) => theme.colors.shadow};
  padding: 2rem;
  font-size: 1.4rem;
  padding-bottom: 5rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  p {
    text-align: left;
    width: 100%;
    padding: 0 0.75rem;
    margin: 1rem 0 0;
    line-height: 1.6;
  }
  .link {
    color: tomato;
  }
  .experience {
    margin-top: 2rem;
    margin-left: 1rem;

    h4 {
      margin-bottom: 0.2rem;
      opacity: 0.7;
    }
    .company {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    margin-top: 1rem;
  }
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  line-height: 33px;
`;

export const DownloadBtn = styled.a`
  width: 50px;
  height: 50px;
  font-size: 3.5rem;
  color: black;
  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Divider = styled.span`
  width: 1.3px;
  background: ${({ theme }) => theme.colors.text};
`;
