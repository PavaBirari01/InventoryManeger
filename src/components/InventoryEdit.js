import React, { useState, useEffect } from "react";
import { Table, Card, CardBody } from "reactstrap";
import deleteIcon from "../images/glyph_x.svg";
import Pencil from "../images/pencil.svg";

const getLocalItmes = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const InventoryEdit = () => {
  const [inputData, setInputData] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");
  const [items, setItems] = useState(getLocalItmes());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData || inputQuantity === "") {
      alert("plzz fill data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData, quantity: inputQuantity };
          }
          return elem;
        })
      );
      setToggleSubmit(true);

      setInputData("");
      setInputQuantity("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: Math.random(),
        name: inputData,
        quantity: inputQuantity,
      };
      setItems([...items, allInputData]);
      setInputData("");
      setInputQuantity("");
    }
  };

  // delete the items
  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });

    setToggleSubmit(false);

    setInputData(newEditItem.name);
    setInputQuantity(newEditItem.quantity);

    setIsEditItem(id);
  };

  // remove all
  const removeAll = () => {
    setItems([]);
  };

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div className="row">
            <div className="col">
              <h6 className="ItemNames">Item Name *</h6>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-background"
                  placeholder="Add Items..."
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <h6 className="ItemNames">Quantity*</h6>

              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control form-background "
                  placeholder="Add Quantity"
                  value={inputQuantity}
                  min="1"
                  onChange={(e) => setInputQuantity(e.target.value)}
                />
                <div className="input-group-append">
                  {toggleSubmit ? (
                    <button
                      className="btn btn-primary btnHover"
                      type="button"
                      title="Add Item"
                      onClick={addItem}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btnHover"
                      type="button"
                      title="Update Item"
                      onClick={addItem}
                    >
                      Update
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="addItems"></div>

          <br />

          <div className="d-flex justify-content-center">
            <Card className="w-100">
              <CardBody>
                <Table hover>
                  <thead>
                    <h5>Inventory List</h5>
                    <tr>
                      {/* <th>#</th> */}
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((elem) => (
                      <>
                        {console.log(elem, "p1")}
                        <tr>
                          {/* <th scope="row">{items.id + 1}</th> */}
                          <td>{elem.name}</td>
                          <td>{elem.quantity}</td>
                          <td>
                            <div className="row">
                              <div className="col">
                                <img
                                  src={Pencil}
                                  alt="Your SVG"
                                  onClick={() => editItem(elem.id)}
                                />
                              </div>
                              <div className="col">
                                <img
                                  src={deleteIcon}
                                  alt="Your SVG"
                                  onClick={() => deleteItem(elem.id)}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>

          {/* clear all button  */}

          <button
            type="button"
            className="btn btn-outline-dark btn-clear-all"
            onClick={removeAll}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default InventoryEdit;
