import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, ListGroup, Button } from "react-bootstrap";
import { deleteContact, fetchContacts, queryClient } from "../util/http";
import { fetchContactsData } from "../store/book-actions";
import { bookActions } from "../store/book-slice";

let isInitial = true;

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
  });

  const { mutate } = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
        // refetchType: "none",
      });
    },
  });

  let contactsData;

  const removeContactHandler = (id) => {
    console.log(id);
    dispatch(bookActions.removeContact(id));
    mutate(id);
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchContactsData());
      return;
    }
  });

  if (data) {
    contactsData = (
      <ul className="row gap-4 align-items-center">
        {data.map((item) => (
          <Card
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center shadow"
            key={item.id}
            style={{ width: "18rem", height: "300px" }}
          >
            <Card.Body className="d-flex flex-column justify-content-between position-relative">
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
              className="border-bottom-0"
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
              onClick={() => removeContactHandler(item.fbId)}
            >
              Remove
            </Button>
          </Card>
        ))}
      </ul>
    );
  }

  return <div className="container-fluid">{contactsData}</div>;
};
export default ContactsPage;
