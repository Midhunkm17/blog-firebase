import { signOut } from 'firebase/auth';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  LogIn, LogOut, PenTool } from 'react-feather';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase_config';

function Header({isAuth,setIsAuth})
{
 const signOutUser=()=>{
    signOut(auth).then(()=>{
        localStorage.clear()
        setIsAuth(false)
        window.location.pathname="/login"
    })
 }   


  return (
    <div>
        <Navbar expand="lg" className="bg-black">
          <Container>
            <Link to={"/"} style={{ textDecoration: 'none' }} >  <Navbar.Brand href="#home" className='text-white fs-2 fw-bold'>Blog<span className='text-primary'>.com</span><PenTool className='text-primary'  size={30}></PenTool></Navbar.Brand></Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto fw-bold ">
                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="#link"></Nav.Link>
                <Link to={"/"} style={{ textDecoration: 'none' }} >  <Navbar.Brand href="#home" className=' fw-bold fs-6'><i  class="text-white fa-solid fa-house fa-xl"></i></Navbar.Brand></Link>
               {isAuth && <Link to={"/createpost"} style={{ textDecoration: 'none' }} >  <Navbar.Brand href="#home" className=' text-white fs-5'>Create-Post</Navbar.Brand></Link>}
              </Nav>
             {!isAuth ? <Link className='fw-bold fs-6 container-flex' to={"/login"} style={{ textDecoration: 'none', justifyContent:'flex-end' }} ><Button className='btn1  text-white fw-bold' variant='outline-primary'>Login <LogIn style={{ color: 'white' }}></LogIn></Button></Link> : <Button onClick={signOutUser} className=' text-white fw-bold' variant='outline-primary'>LogOut <LogOut style={{color:'white'}}></LogOut></Button> }
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header