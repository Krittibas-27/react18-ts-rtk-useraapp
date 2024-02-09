import React, { useEffect } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteUser, getAllUser } from "../redux/actions/UserAction";
import SpinnerLoading from "../components/SpinnerLoading";
import { useNavigate } from "react-router-dom";
import { UserDataModel } from "../redux/models/userModel";

const UserList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, allUser } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const ViewSingleUser = (uData: UserDataModel) => {
    navigate(`/userlist/:${uData.id}`, {
      state: { singleuser: uData },
    });
  };
  const addUser = (): void => {
    navigate('/user/adduser')
  }
  const EditUser = (edata: UserDataModel): void => {
    navigate(`/user/:${edata.id}`, {
      state: { editdata: edata }
    })
  }
  const DeleteUser = (delId: number | string) => {
    if(window.confirm('Do you want to Delete')){
      dispatch(deleteUser(delId)).then((res)=>{
        if(res.type==='delete/user/fulfilled'){
          dispatch(getAllUser())
        }
      }).catch((err)=>console.log(err))
    } 
  }

  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  //console.log(sect)
  return (
    <Container>
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#Sl.No</th>
              <th>User Name <Badge bg="primary">{allUser && allUser.length}</Badge></th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUser &&
              allUser.map((udata: UserDataModel, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{udata.username}</td>
                    <td>{udata.email}</td>
                    <td>{udata.phone}</td>
                    <td>
                      <Button className="mx-1" type="button" variant="success" size="sm" onClick={() => addUser()} >
                        Add New
                      </Button>
                      <Button className="mx-1" type="button" variant="primary" size="sm" onClick={() => ViewSingleUser(udata)} >
                        View
                      </Button>
                      <Button type='button' className='mx-1' size="sm" variant="secondary" onClick={() => EditUser(udata)}>Edit</Button>
                      <Button type='button' className='mx-1' size="sm" variant="danger" onClick={() => DeleteUser(udata.id)}>Delete</Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default UserList
