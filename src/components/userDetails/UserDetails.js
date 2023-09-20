import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase_setup/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import defaultPic from './defaultPic.jpg'
import { clearCart } from '../../redux/CartSlice';



const UserDetails = () => {  //user details in nav bar
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [authUser, setAuthUser] = useState(null);
  const btns = document.querySelectorAll('.signingBtn');


  const userSignOut = () => {
    signOut(auth).then(() => {
      // show sign in and sign up buttons
      {
        btns.forEach((btn) => {
          btn.style.display = 'block'
        })
      }

      dispatch(clearCart());
      navigate('/signIn');
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) //the whole user object
        : setAuthUser(null)
    });
  }, []);



  return (
    <>
      <div>{authUser ? //if user is signed in
        <div className='flexRow userDetailsContainer'>
          {btns.forEach((btn) => { // remove sign in and sign up buttons
            btn.style.display = 'none'
          })}

          <div><small><b>{authUser.displayName}</b></small></div>

          {authUser.photoURL ? // if photo is present
            <div>
              < img src={authUser.photoURL} style={{
                width: 35 + 'px',
                height: 35 + 'px',
                borderRadius: 50 + '%'
              }} />
            </div>

            : //put default pic if no photo
            <div>
              < img src={defaultPic} style={{
                width: 35 + 'px',
                height: 35 + 'px',
                borderRadius: 50 + '%'
              }} />
            </div>
          }

          <div><button onClick={userSignOut}>
            <small><b>Sign out</b></small> </button>
          </div>
        </div>

        // empty <p> if no user is signed in
        : <p> </p>}
      </div>
    </>
  )
}

export default UserDetails;