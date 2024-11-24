import { NavLink } from "react-router-dom";

export const Header = () => {
  // const getNavLinkStyle = ({ isActive }) => {
  //   return {
  //     color: isActive ? "Orange" : "Blue",
  //   };
  // };

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get HKFLIX Membership, 30-day return od refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="#">SIGN IN</NavLink>
              <NavLink to="#">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <p>HKFLIX</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  // style={({ isActive }) => {
                  //   return {
                  //     color: isActive ? "blue" : "orange",
                  //   };
                  // }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movie"
                  className="nav-link"
                  // style={getNavLinkStyle}
                >
                  movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
