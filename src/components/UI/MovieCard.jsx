import { NavLink } from "react-router-dom";
import "./MovieCard.css";
export const MovieCard = ({ curMovie }) => {
  const { Poster, Title, imdbID } = curMovie;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={Title} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};
