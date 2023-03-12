import React, {useState} from 'react'

const LogIn = () => {

    const [usernameLog, setUsernameLog] = useState(' ')
    const [passwordLog, setPasswordLog] = useState(' ')

    const submit = (e) => {
        e.preventDefault()
        console.log(usernameReg, passwordReg)
    }

  return (
    <div>
         <form className='logForm'>
            <label className='labelUser'>Username</label>
            <br />
            <input className='inputs' onChange={(e)=>{setUsernameReg(e.target.value)}}></input>
            <br />
            <label className='labelPass'>Password</label>
            <br />
            <input className='inputs' type='password' onChange={(e)=>{setPasswordReg(e.target.value)}}></input>           

            <br />
            <button className='button' onClick={submit}>Log In</button>
        </form>

    </div>
  )
}

export default LogIn