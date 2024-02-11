// import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

import { useLoaderData, useFetcher } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";

import { bookActions } from "../store/book-slice";
// import { fetchInitData, sendContactData } from "../store/book-actions";

// let isInitial = true;

const HomePage = () => {
  const { submit } = useFetcher();
  const dispatch = useDispatch();
  const data = useLoaderData();
  // const data = useSelector((state) => state.book.data);
  // const contacts = useSelector((state) => state.book.contacts);
  // const book = useSelector((state) => state.book);

  // useEffect(() => {
  //   dispatch(fetchInitData());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   if (book.changed) {
  //     dispatch(sendContactData(contacts));
  //   }
  // }, [contacts, dispatch]);

  const addContactHandler = (item) => {
    const contact = {
      ...item,
      address: item.address.street,
      suite: item.address.suite,
      city: item.address.city,
      zipcode: item.address.zipcode,
      lat: item.address.geo.lat,
      lng: item.address.geo.lng,
      company: item.company.name,
      bs: item.company.bs,
      catchPhrase: item.company.catchPhrase,
    };

    dispatch(bookActions.addContact(item));
    submit(contact, { method: "POST", action: "/add" });
  };

  const contactsData = (
    <ul className="row gap-4 align-items-center">
      {data.map((item) => (
        <Card
          className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center shadow"
          key={item.id}
          style={{ width: "18rem", height: "275px" }}
        >
          <Card.Body className="d-flex flex-column justify-content-between position-relative">
            <div>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Card.Link
                  className="text-decoration-none text-muted"
                  href={item.website}
                >
                  {item.website}
                </Card.Link>
              </Card.Subtitle>
            </div>

            <Card.Text>
              {item.name.split(" ")[0]} works at {item.company.name}.
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush" className="border-bottom-0">
            <ListGroup.Item>Phone: {item.phone}</ListGroup.Item>
            <ListGroup.Item>Location: {item.address.city}</ListGroup.Item>
            <ListGroup.Item>Email: {item.email}</ListGroup.Item>
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

  return <div className="container-fluid">{contactsData}</div>;
};

export default HomePage;
