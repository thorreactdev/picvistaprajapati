import React, { useEffect } from 'react'
import { AuthValue } from '../store/auth'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const {LogoutUser} = AuthValue();
    useEffect(()=>{
        LogoutUser();
    },[LogoutUser])
  return (
    <Navigate to="/Login"/>
  );
};

export default Logout