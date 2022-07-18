import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function EditCard() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setBody(localStorage.getItem("body"));
  }, []);

    const postData = () => {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
        <Button onClick={postData} variant="primary" type="submit">
          Edit
        </Button>
      </Form>
    </div>
  );
}
