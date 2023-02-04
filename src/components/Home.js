import React from "react";
import { Table, Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const listItems = JSON.parse(localStorage.getItem("lists"));
  const navigate = useNavigate();
  const handleClick = () => navigate("/lists");
  return (
    <div>
      <h2 className="App-header mb-3 ">Inventory List</h2>
      <div className="d-flex justify-content-center ">
        <Card className="w-50 cardbody">
          <CardBody className="">
            <Table striped >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {listItems?.map((item) => (
                  <>
                    <tr>
                      <th scope="row">{""}</th>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
            <button className="btn btn-primary" onClick={handleClick}>
              Edit List
            </button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export { Home };
