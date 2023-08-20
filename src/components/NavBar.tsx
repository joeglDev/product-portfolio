import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/">Welcome</Link>
        </li>
      </ul>
    </nav>
  );
};
