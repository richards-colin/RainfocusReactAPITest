import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";

export default function Update() {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setCompany(localStorage.getItem("Company"));
    setName(localStorage.getItem("Name"));
    setDescription(localStorage.getItem("Description"));
    setEmail(localStorage.getItem("Email"));
    setPhone(localStorage.getItem("Phone"));
    setColor(localStorage.getItem("Color"));
  }, []);

  const updateAPIData = (e) => {
    e.preventDefault();
    axios
      .put(`https://rf-json-server.herokuapp.com/events-2/${id}`, {
        id,
        company,
        name,
        description,
        email,
        phone,
        color
      })
      .then(() => {
        history.push("/read");
      });
  };
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Company</Form.Label>
          <Form.Control
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Color</Form.Label>
          <Form.Control
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
