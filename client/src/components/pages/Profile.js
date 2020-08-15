import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import { UserCardContainer, UserImage } from '../../Styled/Profile';
const Profile = () => {
  const {
    authState: {
      user: { isAdmin },
    },
  } = useContext(AuthContext);
  return (
    <div style={{ width: '1200px' }}>
      <UserCardContainer>
        <UserImage src={require('../../assets/img/avatar.png')} />
      </UserCardContainer>
      {isAdmin && <Link to='/admin'>ADMIN PANEL</Link>}
    </div>
  );
};

export default Profile;
