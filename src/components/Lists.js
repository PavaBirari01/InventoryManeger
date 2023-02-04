import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import InventoryEdit from "./InventoryEdit";
const Lists = () => {
  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center cardbody">
        <Card className="w-50">
          <CardBody className="">
            <InventoryEdit />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };
