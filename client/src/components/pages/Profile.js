import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
const Profile = () => {
  // const { authState } = useContext(AuthContext);
  return (
    <div>
      <Link to='/admin'>admin</Link>
    </div>
  );
};

export default Profile;
