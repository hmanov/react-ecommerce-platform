import styled from 'styled-components';

export const CartContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ItemContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const ItemImg = styled.img`
  width: 50px;
  height: 50px;
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
`;
export const Field = styled.div`
  display: flex;

  align-items: center;
  flex: 0 0 20%;
  &:nth-child(1) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  &:nth-child(2) {
    justify-content: center;
    gap: 10px;
    margin-left: -10px;
  }
  &:nth-child(3) {
    justify-content: center;
  }
  &:nth-child(4) {
    justify-content: center;
  }
`;
