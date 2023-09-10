import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import {
  signUpWithEmailAndPassword,
  signInWithGoogle
} from '../../firebase_setup/firebase';



const SignUpPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  return (
    <>
      <Navbar />

      <div className="mainSigningContainer">
        <div className='topSigningContainer'>
          <form
            className="leftSigningContainer"
            onSubmit={(e) => {
              signUpWithEmailAndPassword(e, email, password, fullName, navigate)
            }}>

            <p><b>Sign up to Lensama</b></p>

            <div className="formContainer">
              <label htmlFor="fullName"><small>Full Name</small></label>
              <input
                type="text"
                name='fullName'
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

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
            {/* <div className="signingBtnContainer"> */}
            <div> </div>
            <button>
              <Link type='submit' to='' className='signInpageBtn'>Sign Up</Link>
            </button>
            {/* </div> */}
          </form>

          <div className="rightSigningContainer">
            <div><Link to='' className="fbLink">
              <small>Continue with Facebook</small></Link>
            </div>
            <div onClick={(e) => { signInWithGoogle(e, navigate) }}>
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
          <div><small>Already have an account?</small></div>
          <div><Link to='/signIn'><small>Sign in</small></Link></div>
        </div>
      </div >
    </>
  );
}

export default SignUpPage;

