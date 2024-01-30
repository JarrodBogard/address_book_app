import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1em",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">Logo</Link>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            marginLeft: "1em",
          }}
        >
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
