import styled from 'styled-components';

export const ProductListContainer = styled.div`
  margin-top: 20px;
  max-width: 800px;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  padding: 10px 5px;
`;
export const Item = styled.div``;
