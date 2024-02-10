import { useDispatch } from "react-redux";

import { useLoaderData, useFetcher } from "react-router-dom";

import { Card, ListGroup, Button } from "react-bootstrap";

import { bookActions } from "../store/book-slice";

const HomePage = () => {
  const { submit } = useFetcher();
  const dispatch = useDispatch();
  const data = useLoaderData();
  //   props -> address{street:, suite:, city:, zipcode:, geo: {lat: , lng: }}
  //     props -> company{name:, catchPhrase:, bs:}
  //        props -> email:, id:, name:, phone:, username:, website:

  dispatch(bookActions.getContacts(data));

  const addContactHandler = (item) => {
    console.log(item);
    const formatData = {
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

    submit(formatData, { method: "POST", action: "/add" });
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
