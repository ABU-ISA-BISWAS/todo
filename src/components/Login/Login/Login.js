import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    
    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-25 mx-auto d-block mb-2'>
                    
                    <span className='px-2'>Sign In With Google</span>
                </button>

            </div>
        </div>
    );
};

export default Login;