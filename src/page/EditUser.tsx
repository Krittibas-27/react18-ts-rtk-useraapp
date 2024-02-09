import React, { FormEvent, ChangeEvent, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { UserDataModel, emailPattern, phonePattern } from '../redux/models/userModel'
import { useAppDispatch } from '../redux/hooks'
import { userDataEdit } from '../redux/actions/UserAction'
import { setTimeout } from 'timers/promises'

const EditUser = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const {state} = useLocation()
    const {editdata} = state
    const [editUser, setEditUser] = useState<UserDataModel>(editdata)

    const [errName, setErrName] = useState<string>('')
    const [errEmail, setErrEmail] = useState<string>('')
    const [errPhone, setErrPhone] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value, checked } = e.target
        console.log(name)
        setEditUser({...editUser, [name] : value})
    }
    const handleChecked = (e: ChangeEvent<HTMLInputElement>): void => {
        setEditUser({...editUser, active : e.target.checked});
    }
    
    const HandelSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!editUser.username){
            return setErrName("Name is Require")
         }else if(editUser.username.length < 3){
             return setErrName("Name must be 3 character")
         }else {setErrName('')}
         if(!editUser.email){
             return setErrEmail("Email is Require")
         }else if(!emailPattern.test(editUser.email)){
             return setErrEmail("Email not correct")
         }else{setErrEmail('')}
         if(!editUser.phone){
             return setErrPhone("Phone is Require")
         }else if(!phonePattern.test(editUser.phone)){
             return setErrPhone("Phone not correct")
         }else{setErrPhone('')}

         const editData = {
            username: editUser.username, 
            email: editUser.email,
            phone: editUser.phone,
            active: editUser.active,
            id: editUser.id
        }
        dispatch(userDataEdit(editData))
        navigate("/")
    }
    
  return (
    <div className="my-4">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card body style={{ boxShadow: "0px 1px 7px rgb(203 203 203)" }}>
                            <Form onSubmit={ HandelSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group className='my-2'>
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control name="username" placeholder="Name" value={editUser.username} onChange={handleChange} />
                                            {errName && <small className='text-danger'>{errName}</small>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='my-2'>
                                            <Form.Label>Email ID</Form.Label>
                                            <Form.Control name="email" placeholder="Email" value={editUser.email} onChange={handleChange} />
                                            {errEmail && <small className='text-danger'>{errEmail}</small>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className='my-2'>
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control name="phone" placeholder="Phone" value={editUser.phone} onChange={handleChange} />
                                            {errPhone && <small className='text-danger'>{errPhone}</small>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='my-2'>
                                            <Form.Label> User Status</Form.Label><br />
                                            <Form.Check
                                                inline
                                                label={editUser.active ? "Active" : "Inactive"}
                                                name="active"
                                                type="checkbox"
                                                id="inline-checkbox-1"
                                                checked={editUser.active ? true : false}
                                                onChange={handleChecked}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='text-center'>
                                        <Button type='submit' className='mt-4' variant="primary">Save</Button>
                                        <Button type='button' className='mt-4 mx-4' variant="secondary" onClick={() => navigate('/')}>Back</Button>
                                        
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default EditUser