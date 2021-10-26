import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default function Create() {
  let history = useHistory();

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [color, setColor] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios
      .post(`https://rf-json-server.herokuapp.com/events-2/`, {
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
      <Form validated margin>
        <Form.Group>
          <Form.Label>Company</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Company Name"
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="Enter Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Color</Form.Label>
          <Form.Control
            required
            type="color"
            placeholder="Enter Color"
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Group>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
