import styled from 'styled-components';
export const Slogan = styled.h1`
  color: ${(props) => props.theme.dark};
  font-size: 48px;
`;

export const CustomColor = styled.span`
  color: ${(props) => props.theme.primary};
  font-style: italic;
`;
export const Featured = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    justify-content: space-evenly;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
