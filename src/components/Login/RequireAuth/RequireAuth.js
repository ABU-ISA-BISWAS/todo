import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';



const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

  const location = useLocation();
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>
  }
  if (!user.emailVerified) {
    return <div className='not-verified '>
      <h3 className='text-danger'>Your Email is not verified!!</h3>
      <h5 className='text-success'>Please verify your email address</h5>
      <button className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          alert('Sending verification email');
        }}
      >
        Send Verification Email Again
      </button>
     
    </div>
  }
  return children;
};

export default RequireAuth;