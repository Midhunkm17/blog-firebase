import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Mail, Phone } from 'react-feather'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{borderTop:'1px solid grey'}} className='bg-black text-white mt-5 p-4 '>
    <Row className='mt-4'>

        <Col>
            <h5>Blog.com</h5>
            <p>The one place for sharing your thoughts! </p>
            <p>Any Quries? <Mail className='ms-2 me-2'></Mail>contact@blog17.com</p>
        </Col>

        <Col>
            <div className='ms-5'>
                <h5>Links</h5>
                <Link style={{ textDecoration: 'none' }}>Home</Link><br />
                <Link style={{ textDecoration: 'none' }}>Log In</Link><br />
                <Link style={{ textDecoration: 'none' }}>Create-Post</Link>
            </div>
        </Col>

        <Col>
            <div className='ms-5'>
                <h5>Guides</h5>
                <h6>React</h6>
                <h6>React Bootstrap</h6>
                <h6>Routing</h6>
                <h6>Firebase</h6>
            </div>
        </Col>
        <Col>
            <h5><Phone className='text-primary'></Phone> Contact Us</h5>
            <input type="text" placeholder='Enter Email' className='form-control mt-3' />
            <Button variant='outline-primary' className='mt-2 mb-2'>Send</Button><br />
            <i  class="fa-brands fa-x-twitter fa-2x text-primary "></i>
            <i  class="fa-brands fa-facebook fa-2x ms-3 text-primary"></i>
            <i  class="fa-brands fa-instagram fa-2x ms-3 text-primary"></i>
            <i  class="fa-brands fa-linkedin fa-2x ms-3 text-primary"></i>
        </Col>
    </Row>

</div>
  )
}

export default Footer