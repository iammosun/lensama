import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  signInWithGoogle,
  SignWithEmailAndPassword
} from '../../firebase_setup/firebase';
import Navbar from '../../components/navbar/Navbar';



const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <>
      <Navbar
        ifShowSignInBtn='hide'
        ifShowSignUpBtn='show'
      />


      <div className="mainSigningContainer">
        <div className='topSigningContainer'>
          <form
            className="leftSigningContainer"
            onSubmit={(e) => {
              SignWithEmailAndPassword(e, email, password, navigate);
            }}>

            <p><b>Sign in to Lensama</b></p>

            <div className="formContainer">
              <label htmlFor="email"><small>Email</small></label>
              <input
                type="email"
                name='email'
                placeholder="test@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password"><small>Password</small></label>
              <input
                type="password"
                name='password'
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="signBtnContainer">
              <div><Link to=''><small>forgot password?</small></Link></div>
              <button id='signBtnContainer'
                type='submit'>
                Sign In &rarr;
              </button>
            </div>
          </form>

          <div className="rightSigningContainer">
            <div><Link to='' className="fbLink">
              <small>Continue with Facebook</small></Link>
            </div>

            <div onClick={(e) => {
              signInWithGoogle(e, navigate)
            }}>
              <Link to='' className="googleLink">
                <small>Continue with Google</small>
              </Link>
            </div>

            <div><Link to='' className='gitHubLink'>
              <small>Continue with GitHub</small></Link>
            </div>
          </div>
        </div>

        <div className="bottomSigningContainer">
          <div><small>Don't have an account?</small></div>
          <div><Link to='/signUp'><small>Sign up</small></Link></div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;