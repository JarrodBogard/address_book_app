import { useEffect } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchContactsData } from "../store/book-actions";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.book.contacts);

  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);

  const removeContactHandler = (id) => {
    console.log(id);
  };

  const contactsData = (
    <ul className="row gap-4 align-items-center">
      {contacts.map((item) => (
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
            onClick={() => removeContactHandler(item.id)}
          >
            Remove
          </Button>
        </Card>
      ))}
    </ul>
  );

  return <div className="container-fluid">{contactsData}</div>;
};
export default ContactsPage;
