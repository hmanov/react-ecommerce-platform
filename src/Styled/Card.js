import styled from 'styled-components';

export const FeaturedCard = styled.div`
  max-width: 350px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 33%;
  margin-bottom: 80px;
  gap: 20px;
  &:nth-child(2) {
    margin: 0 20px;
  }
  @media (max-width: 600px) {
    flex: 0 0 50%;
  }
`;

export const FeaturedCardImg = styled.img`
  max-width: 350px;
  width: 100%;
`;
export const FeaturedCardPrice = styled.h3`
  position: absolute;
  top: 10px;
  left: 10px;
`;
export const FeaturedCardTitle = styled.h3`
  color: #fff;
`;
