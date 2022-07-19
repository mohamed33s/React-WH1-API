import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function AddBook() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const postData = () => {
    axios
      .post(`https://62d3e4435112e98e4846e84e.mockapi.io/boodsAPI`, {
        title,
        body,
      })
      .then((res) => {
        console.log(res);
        navigate("/cards");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ margin: "20%" }}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            onChange={(e) => {
              setBody(e.target.value);
            }}
            type="text"
            placeholder="Enter Content"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button onClick={postData} variant="primary">
          Add
        </Button>
      </Form>
    </div>
  );
}
