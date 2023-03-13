import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const LogIn = () => {

    const [usernameLog, setUsernameLog] = useState(' ')
    const [passwordLog, setPasswordLog] = useState(' ')

    const submit = (e) => {
        e.preventDefault()
        console.log(usernameLog, passwordLog)
    }

  return (
    <div>
         <form className='logForm'>
            <label className='labelUser'>Username</label>
            <br />
            <input className='inputs' onChange={(e)=>{setUsernameLog(e.target.value)}}></input>
            <br />
            <label className='labelPass'>Password</label>
            <br />
            <input className='inputs' type='password' onChange={(e)=>{setPasswordLog(e.target.value)}}></input>           

            <br />
            <button className='button' onClick={submit}>Log In</button>
        </form>

        <Link to='/register'> 
            <button> Register now</button>
        </Link>

    </div>
  )
}

export default LogIn