import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { Button } from 'react-bootstrap'
import { auth, provider } from '../Firebase_config'
import { useNavigate } from 'react-router-dom'


function Login({setIsAuth}) {

    const navigate=useNavigate()

    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate("/")
        })
    }
    

    return (
        <div className='container mt-5 p-4' style={{border:'2px solid white'}}>
            <div cl className='container w-100 text-center p-5 '>
                
                <p className='text-center fs-5 fw-bold'>Sign In with Google to Continue</p>
                <Button onClick={signInWithGoogle} variant='outline-primary' ><img width={45} height={45} src="https://i.postimg.cc/R0ckFbhj/pngwing-com-3.png" alt="" />Sign In with Google</Button>
            
            </div>
        </div>
    )
}

export default Login