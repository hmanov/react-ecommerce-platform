import styled from 'styled-components';

export const DetailsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 60px;
`;
export const ImageContainer = styled.div`
  width: 50%;
  padding: 30px;
`;

export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px ${(props) => props.theme.primary} solid;
  border-radius: 5px;
`;
export const PriceTag = styled.h2`
  color: ${(props) => props.theme.primary};
  font-size: 40px;
`;

export const DetailsSpan = styled.span`
  margin: 20px 0;
`;
