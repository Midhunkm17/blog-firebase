import {  collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../Firebase_config'
import Card from 'react-bootstrap/Card';
import './Home.css'
import { ArrowDown, Bookmark, PenTool, Trash2, User } from 'react-feather';
import { Button, Col, Row } from 'react-bootstrap';


function Home({isAuth}) {
    const [postLists, setPostList]=useState([])

    const postsCollectionRef = collection(db, "posts")
    
    useEffect(()=>{
        const getPosts= async()=>{
            const data = await getDocs(postsCollectionRef)
            setPostList(data.docs.map((i)=>({...i.data(), id: i.id})));
        }
        getPosts()
    })

    const deletePost = async (id)=>{
      const postDoc = doc(db, "posts",id)
      await deleteDoc(postDoc)
    }

  return (
    <div>
            <div style={{marginTop:'150px'}} className='container w-100 mb-5'>
        <Row className=' w-100'>
            <Col   lg={6} md={12}>
            <h3 style={{border:'2px solid grey'}} className='fs-3 p-2 fw-bold hdng' >Blog.com <PenTool></PenTool></h3>
            <p>The one place for sharing your thoughts! <br />Let's Start Blogging</p>
           <Button className='mb-4' variant='outline-primary'><a style={{textDecoration:'none'}} href="#card">Explore Now<ArrowDown></ArrowDown></a></Button>
            </Col>

            <Col   lg={6} md={12}>
            <img style={{width:'107%'}} src="https://i.postimg.cc/Bnwq1DHD/d3464a4351fdf340ccb6bb37c281381a.gif" alt="" />
            </Col>
        </Row>
        </div>
        
        <hr style={{margin:'100px'}} />
   
      
      {
        postLists.map((j)=>{
            return(
                <div className='container w-100 crddiv'>
               <Card id='card' style={{border:'2px solid white'}} className='crd mb-4  mt-5 bg-dark'>
                <div className='text-start'><Bookmark className='text-primary'></Bookmark></div>
      <Card.Body>
      
        <Card.Title className='fs-3 text-center '>{j.title}</Card.Title>
        <Card.Text>
            <p className='p1 mt-4'>{j.post}</p>
            <div className='text-start mt-4'>
               <User className='mb-2' size={20}></User> {j.author.name}
            </div>
           { isAuth && j.author.id === auth.currentUser.uid && ( <div  className='text-center'><Trash2 className='btn' style={{color:'red'}}  onClick={()=>{deletePost(j.id)}} size={50}></Trash2></div>)}
        </Card.Text>
      </Card.Body>
    </Card>
              </div>
            )
        })
        }</div>
  )
}

export default Home