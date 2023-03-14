import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Style/Register.css'

const Register = () => {

    const [usernameReg, setUsernameReg] = useState(' ')
    const [passwordReg, setPasswordReg] = useState(' ')

    const submit = (e) => {
        e.preventDefault()
        console.log(usernameReg, passwordReg)
    }
    
  return (
    <div className='registerContainer'>
        <form className='regForm'>
            <label className='labelUser'>Username</label>
            <br />
            <input className='inputs' onChange={(e)=>{setUsernameReg(e.target.value)}}></input>
            <br />
            <label className='labelPass'>Password</label>
            <br />
            <input className='inputs' type='password' onChange={(e)=>{setPasswordReg(e.target.value)}}></input>           

            <br />
            <button className='button' onClick={submit}>Register</button>
            
            <br />


        <Link  to='/login'> 
            <button> Already have an account? Sign in</button>
        </Link>
        </form>
    </div>
  )
}

export default Register