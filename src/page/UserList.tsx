import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllUser } from "../redux/actions/UserAction";
import SpinnerLoading from "../components/SpinnerLoading";
import { useNavigate } from "react-router-dom";
import { UserDataModel } from "../redux/models/userModel";

const UserList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, allUser } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const ViewSingleUser = (uData:UserDataModel)  => {
    navigate(`/userlist/:${uData.id}`, {
      state: { singleuser : uData},
    });
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  //console.log(sect)
  return (
    <>
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#Sl.No</th>
              <th>User Name</th>
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
                      <Button type="button" variant="primary" size="sm" onClick={() => ViewSingleUser(udata)} >
                        View
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserList;
