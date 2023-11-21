import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { auth, db } from '../Firebase_config';
import { useNavigate } from 'react-router-dom';

function CreatePost({isAuth}) {

    const navigate=useNavigate()

    const [title, setTitle] = useState("")
    const [post, setPost] = useState("")

    const postsCollectionRef = collection(db, "posts")

    const createPost = async () => {
        await addDoc(postsCollectionRef, { title,
             post,
              author: { name: auth.currentUser.displayName,
              id: auth.currentUser.uid },
             })
             navigate("/")
    }

    useEffect(()=>{
       if (!isAuth) {
        navigate("/login")
       }
    },[])
    return (
        <div >
            <div className='container-flex w-100 mt-5'>
                <h4 className='text-center fw-bold'>Create Your Post</h4>
                <div style={{ border: '2px solid white' }} className='container  mt-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Title..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content:</Form.Label>
                            <Form.Control onChange={(e) => { setPost(e.target.value) }} as="textarea" placeholder='Share your content here...' rows={3} />
                        </Form.Group>
                        <div className='container w-100 text-center mb-4'>
                            <Button onClick={createPost} className='text-white' variant='outline-primary'>Post</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost