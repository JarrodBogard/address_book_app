import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery, useMutation } from "@tanstack/react-query";

import { Card, ListGroup, Button } from "react-bootstrap";

import { bookActions } from "../store/book-slice";
import { fetchContactsData } from "../store/book-actions";
import { fetchInitData, sendContact, queryClient } from "../util/http";

let isInitial = true;

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["initData"],
    queryFn: fetchInitData,
  });

  const { mutate } = useMutation({
    mutationFn: sendContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  let content;

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchContactsData());
      return;
    }
  }, [dispatch]);

  const addContactHandler = (item) => {
    dispatch(bookActions.addContact(item));
    mutate(item);
  };

  if (data) {
    content = (
      <ul className="row gap-4 align-items-center">
        {data.map((item) => (
          <Card
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center shadow"
            key={item.id}
            style={{ width: "18rem", height: "300px" }}
          >
            <Card.Body className="d-flex flex-column justify-content-between position-relative mb-0">
              <div>
                <Card.Title className="pe-5">{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <Card.Link
                    className="text-decoration-none text-muted"
                    href={item.website}
                  >
                    {item.website}
                  </Card.Link>
                </Card.Subtitle>
              </div>

              <Card.Text style={{ fontSize: ".9rem" }}>
                {item.name.split(" ")[0]} works at {item.company.name}.
              </Card.Text>
            </Card.Body>
            <ListGroup
              variant="flush"
              className="border-bottom-0 "
              style={{ fontSize: ".9rem" }}
            >
              <ListGroup.Item>Phone: {item.phone}</ListGroup.Item>
              <ListGroup.Item>Location: {item.address.city}</ListGroup.Item>
              <ListGroup.Item style={{ background: "none" }}>
                Email: {item.email}
              </ListGroup.Item>
            </ListGroup>
            <Button
              variant="dark"
              size="sm"
              className="position-absolute top-0 end-0 m-2"
              onClick={() => addContactHandler(item)}
            >
              Add
            </Button>
          </Card>
        ))}
      </ul>
    );
  }

  return <div className="container-fluid">{content}</div>;
};

export default HomePage;
