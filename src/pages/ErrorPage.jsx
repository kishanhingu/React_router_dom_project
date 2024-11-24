import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
    // navigate("/");
  };

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img src="../../public/images/error page.png" alt="404 page" />
          </figure>
          <div className="text-center">
            <p className="p-a">
              .The page you were looking for could not be found
            </p>
            <p className="p-b">...Back to previous page</p>
          </div>
        </div>
        <NavLink to="/">Go Back To Home Page</NavLink>

        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    );
  }
  return (
    <section className="error-section">
      <h1>The page you are looking does not exist</h1>
    </section>
  );
};
