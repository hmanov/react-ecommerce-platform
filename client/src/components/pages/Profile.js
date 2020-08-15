import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import { UserCardContainer, UserImage, InfoItem, InfoContainer, AdminPanelLink } from '../../Styled/Profile';
import moment from 'moment';
const Profile = () => {
  const {
    authState: {
      user: { isAdmin, firstName, lastName, email, date },
    },
  } = useContext(AuthContext);
  return (
    <div
      style={{
        width: '1200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <UserCardContainer>
        <UserImage src={require('../../assets/img/avatar.png')} />
        <InfoContainer>
          <InfoItem>
            <strong>FirstName </strong>: {firstName}
          </InfoItem>
          <InfoItem>
            <strong>LastName </strong>: {lastName}
          </InfoItem>
          <InfoItem>
            <strong>Email </strong>: {email}
          </InfoItem>
          <InfoItem>
            <strong>Registered on </strong>: {moment(date).format('DD-MM-YYYY HH:MM')}
          </InfoItem>
        </InfoContainer>
      </UserCardContainer>
      {isAdmin && <AdminPanelLink to='/admin'>ADMIN PANEL</AdminPanelLink>}
    </div>
  );
};

export default Profile;
