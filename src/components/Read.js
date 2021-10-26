import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";
import "../../src/app.css";

const URL = `https://rf-json-server.herokuapp.com/events-2/`;

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(URL);
    setAPIData(response.data);
    if (!response) return "No response!";
  };

  const setData = (data) => {
    let { id, company, name, description, email, phone, color } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Company", company);
    localStorage.setItem("Name", name);
    localStorage.setItem("Description", description);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Color", color);
  };

  const onDelete = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = APIData.filter((event) => id !== event.id);
      setAPIData(del);
      getData();
    });
  };

  return (
    <div>
      <Link to="/create">
        <Button variant="primary">Add Event</Button>
      </Link>
      <Table size="sm" responsive striped bordered hover>
        <thead>
          <tr>
            {/* <th>View</th> */}
            <th>Company</th>
            <th>Name</th>
            <th>Description</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Color</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {APIData.map((data) => {
            return (
              <tr>
                {/* <Button size="sm" variant="primary" onClick={handleShow}>
                    demo
                  </Button> */}

                <td>{data.company}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.color}</td>
                <Link to="/update">
                  <td>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setData(data)}
                    >
                      Update
                    </Button>
                  </td>
                </Link>
                <td>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
