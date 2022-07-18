import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cards() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      //   console.log(response.data[0].title);
      setItems(response.data);
    });
  }, []);

    const setUdate = (item) => {
      let { id, title, body } = item;
      localStorage.setItem("id", id);
      localStorage.setItem("title", title);
      localStorage.setItem("body", body);
    };

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((getData) => {
      setItems(getData.data);
    });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      {items.map((item) => (
        <Card style={{ margin: "30px", height: "350px", width: "250px" }}>
          <Card.Body>
            <Card.Title key={item.id}>{item.title}</Card.Title>
            <Card.Text>{item.body}</Card.Text>
            <Link to="/edit">
              <Button
                variant="primary"
                onClick={() => {
                  setUdate(item);
                }}
              >
                Edit
              </Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(item.id);
              }}
              variant="primary"
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
