import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark py-3 shadow">
      <nav className="container">
        <ul className="d-flex justify-content-center align-items-center list-unstyled m-0">
          <li className="mx-3">
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline-primary active-btn"
                  : "btn btn-outline-light"
              }
            >
              Events
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline-primary active-btn"
                  : "btn btn-outline-light"
              }
            >
              Login
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/ajoutEvent"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline-primary active-btn"
                  : "btn btn-outline-light"
              }
            >
              Ajouter Evenement
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
