import styled from 'styled-components';

export const FeaturedCard = styled.div`
  max-width: 340px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  flex: 0 0 33%;

  padding: 20px;
  gap: 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: all 0.3s ease-in;
  margin-bottom: 60px;
  &:hover {
    border: 1px ${(props) => props.theme.dark} solid;
  }
  @media (max-width: 600px) {
    flex: 0 0 50%;
  }
`;

export const FeaturedCardImg = styled.img`
  border-radius: 10px;
  max-width: 350px;
  width: 80%;
`;
export const FeaturedCardPrice = styled.h3`
  display: inline-block;
  height: 55px;
  width: 55px;
  position: absolute;
  text-align: center;
  line-height: 55px;
  border-radius: 50%;
  top: -10px;
  left: 10px;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.dark};
`;
export const FeaturedCardTitle = styled.h3`
  width: 80%;
  color: ${(props) => props.theme.dark};
  font-size: 14px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 80px;
  text-decoration: none;
  text-align: center;
`;

export const featuredCardInfo = styled.p``;

export const FeaturedCardAddToCart = styled.button`
  margin-top: 20px;
  width: 160px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${(props) => props.theme.dark};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
  background: linear-gradient(to right, ${(props) => props.theme.dark} 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-position: left bottom;
  }
`;
