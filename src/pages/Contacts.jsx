import { useSelector } from "react-redux";

const ContactsPage = () => {
  const contacts = useSelector((state) => state.book.contacts);
  const totalContacts = useSelector((state) => state.book.totalContacts);
  console.log(contacts, totalContacts);
  return <div>Contacts</div>;
};
export default ContactsPage;
