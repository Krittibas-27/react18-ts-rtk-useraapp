import React, { ChangeEvent,FormEvent, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { UserDataModel, IValidationError, emailPattern, phonePattern } from '../redux/models/userModel'
import { Uservalidation } from './Uservalidation'
import { useAppDispatch } from '../redux/hooks'
import { addUserData } from '../redux/actions/UserAction'

const AddUser = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [user, setUser] = useState<UserDataModel>({
        username: "",
        email: "",
        phone: "",
        active: false,
        id: ""
    })
    // const [errMsg, setErrMsg] = useState<ValidationError>({
    //     username: "",
    //     email: "",
    //     phone: "",
    // })
    const [errName, setErrName] = useState<string>('')
    const [errEmail, setErrEmail] = useState<string>('')
    const [errPhone, setErrPhone] = useState<string>('')
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setUser({...user, [name]: value })
    }
    const handleChecked = (e: ChangeEvent<HTMLInputElement>): void => {
        setUser({...user, active : e.target.checked});
    }
    const HandelSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!user.username){
           return setErrName("Name is Require")
        }else if(user.username.length < 3){
            return setErrName("Name must be 3 character")
        }else {setErrName('')}
        if(!user.email){
            return setErrEmail("Email is Require")
        }else if(!emailPattern.test(user.email)){
            return setErrEmail("Email not correct")
        }else{setErrEmail('')}
        if(!user.phone){
            return setErrPhone("Phone is Require")
        }else if(!phonePattern.test(user.phone)){
            return setErrPhone("Phone not correct")
        }else{setErrPhone('')}
        
        const userData = {
            id: Date.now(),
            username: user.username, 
            email: user.email,
            phone: user.phone,
            active: user.active
        }
        dispatch(addUserData(userData))
        navigate('/')
        //window.location.reload()

        //setErrMsg(Uservalidation(user))

        //console.log(Object.keys(Uservalidation(user)).length)
        // if(Object.keys(Uservalidation(user)).length === 0){
        //     const userData = {
        //         id: Date.now(),
        //         username: user.username, 
        //         email: user.email,
        //         phone: user.phone,
        //         active: user.active
        //     }
        //     dispatch(addUserData(userData))
        // }
    }
    return (
        <div className="my-4">
            <Container>
                <h1 className='text-center pb-4'>Add User</h1>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card body style={{ boxShadow: "0px 1px 7px rgb(203 203 203)" }}>
                            <Form onSubmit={ HandelSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group className='my-2'>
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control name="username" placeholder="Name" value={user.username} onChange={handleChange} />
                                            {errName && <small className='text-danger'>{errName}</small>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='my-2'>
                                            <Form.Label>Email ID</Form.Label>
                                            <Form.Control name="email" placeholder="Email" value={user.email} onChange={handleChange} />
                                            {errEmail && <small className='text-danger'>{errEmail}</small>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className='my-2'>
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} />
                                            {errPhone && <small className='text-danger'>{errPhone}</small>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='my-2'>
                                            <Form.Label> User Status</Form.Label><br />
                                            <Form.Check
                                                inline
                                                label={user.active ? "Active" : "Inactive"}
                                                name="active"
                                                type="checkbox"
                                                id="inline-checkbox-1"
                                                checked={user.active ? true : false}
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

export default AddUser