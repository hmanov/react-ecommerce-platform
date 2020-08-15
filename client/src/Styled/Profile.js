import styled from 'styled-components';

export const UserCardContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  max-height: 650px;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
`;

export const UserImage = styled.img`
  margin: 50px 0;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.primary};
`;
