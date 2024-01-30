import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const data = useLoaderData();

  //   props -> address{street:, suite:, city:, zipcode:, geo: {lat: , lng: }}
  //     props -> company{name:, catchPhrase:, bs:}
  //        props -> email:, id:, name:, phone:, username:, website:

  const contactsData = data.map((item) => (
    <li key={item.id + item.phone}>
      <h1>{item.name}</h1>
    </li>
  ));

  return (
    <div>
      <ul>{contactsData}</ul>
    </div>
  );
};

export default HomePage;
