import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="">
          Learn React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <NavLink className={(isActive)=>"nav-link px-lg-3 py-3 py-lg-4 " + (isActive.isActive ? " text-decoration-underline" : "")} to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={(isActive)=>"nav-link px-lg-3 py-3 py-lg-4 " + (isActive.isActive ? " text-decoration-underline" : "")} to="/post/create">
                Create Post
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
