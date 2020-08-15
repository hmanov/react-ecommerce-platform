import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const UserCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  max-height: 650px;
  height: 100%;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
`;

export const UserImage = styled.img`
  margin: 50px 0;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.primary};
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InfoItem = styled.div`
  color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const AdminPanelLink = styled(Link)`
  margin-top: 100px;
  width: 160px;
  height: 80px;
  text-align: center;
  padding: 27px 10px;
  text-decoration: none;
  color: ${(props) => props.theme.primary};
  font-weight: bolder;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 5px;
`;
