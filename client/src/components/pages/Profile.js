import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
const Profile = () => {
  const {
    authState: {
      user: { isAdmin },
    },
  } = useContext(AuthContext);
  return <div>{isAdmin && <Link to='/admin'>ADMIN PANEL</Link>}</div>;
};

export default Profile;
