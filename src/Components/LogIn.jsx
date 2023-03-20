import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from '../firebase-config'
import '../Style/LogIn.css'


const LogIn = () => {
  
  const [usernameLog, setUsernameLog] = useState(' ')
  const [passwordLog, setPasswordLog] = useState(' ')

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])

  const login = async (e) => {
    try{
      e.preventDefault();
      const user =  await signInWithEmailAndPassword(auth, usernameLog, passwordLog)
      console.log(user)
    } catch (error) {
      console.log(error.message)
    } 
  }
  

  const logOut = async () => {
    await signOut(auth);
  }

  

  return (
    <div className='logContainer'>
      <h2>Log In</h2>
         <form className='logForm'>
            <label className='labelUser'>Username</label>
            <br />
            <input className='inputs' onChange={(e)=>{setUsernameLog(e.target.value)}}></input>
            <br />
            <label className='labelPass'>Password</label>
            <br />
            <input className='inputs' type='password' onChange={(e)=>{setPasswordLog(e.target.value)}}></input>           

            <br />
            <button className='button' onClick={login}>Log In</button>
            <br />
       
            <Link  to='/register'> 
                <button className='routeButton'> Don't have an account? Register now</button>
            </Link>

        </form>

        <h4>User Logged in:</h4>
        {user?user.email : "not logged in"}

    <button onClick={logOut}> Log Out</button>



    </div>
  )
}

export default LogIn