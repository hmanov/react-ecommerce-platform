import styled from 'styled-components';

export const ShopTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.primary};
  font-size: 2em;
  letter-spacing: 2px;
  margin-top: 60px;
  margin-bottom: 60px;
`;
export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
`;

export const ClearBtn = styled.button`
  padding: 2px 24px;
  background-color: #fff;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 5px;
`;
