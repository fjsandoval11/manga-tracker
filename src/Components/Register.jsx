import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Style/Register.css'
import {onAuthStateChanged, createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from '../firebase-config'

const Register = () => {

    const [usernameReg, setUsernameReg] = useState(' ')
    const [passwordReg, setPasswordReg] = useState(' ')

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])

    const register = async (e) => {
         try{
            e.preventDefault();
            const user =  await createUserWithEmailAndPassword(auth, usernameReg, passwordReg)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logOut = async () => {
        await signOut(auth);
      }

  return (
    <div className='registerContainer'>
        <h2>Register</h2>
        <form className='regForm'>
            <label className='labelUser'>Username</label>
            <br />
            <input className='inputs' onChange={(e)=>{setUsernameReg(e.target.value)}}></input>
            <br />
            <label className='labelPass'>Password</label>
            <br />
            <input className='inputs' type='password' onChange={(e)=>{setPasswordReg(e.target.value)}}></input>           

            <br />
            <button className='button' onClick={register}>Register</button>
            
            <br />


        <Link  to='/login'> 
            <button> Already have an account? Sign in</button>
        </Link>
        </form>

        <h4>User Logged in:</h4>
        {user?user.email : 'not logged in'}

    <button onClick={logOut}> Log Out</button>

    </div>
  )
}

export default Register