import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const SingleUser = () => {
    const navigate= useNavigate()
    const {state}= useLocation()
    const {singleuser} = state

    const GoBack=()=>{
      navigate('/')
    }

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <Card body className='m-4'>
          {singleuser?.username && <Card.Text>Name : {singleuser?.username}</Card.Text>}
          {singleuser?.email && <Card.Text>Email : {singleuser?.email}</Card.Text>}
          {singleuser?.phone && <Card.Text>Phone : {singleuser?.phone}</Card.Text>}
          <Button variant="secondary" size="sm" onClick={()=>GoBack()}>Go Back</Button>
        </Card>
        </Col>
      </Row>
    </Container>
    
  )
}

export default SingleUser