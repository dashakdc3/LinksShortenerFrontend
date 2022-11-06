import "../base/base.css";
import "../routes/login/login.css";

const Header = () => {
  return (
    <header className="header_container">
      <li>
        <i className="icons fa-solid fa-house"></i>
        <a href="https://f-links-shortener.herokuapp.com/" className="sign">
          Main
        </a>
      </li>
      <li>
        <i className="icons fa-solid fa-right-to-bracket"></i>
        <a
          href="https://f-links-shortener.herokuapp.com/home/"
          className="sign"
        >
          Home
        </a>
      </li>
      <li>
        <i className="icons fa-solid fa-right-to-bracket"></i>
        <a
          href="https://f-links-shortener.herokuapp.com/login/"
          className="sign"
        >
          Sign In
        </a>
      </li>
      <li>
        <i className="icons fa-solid fa-right-to-bracket"></i>
        <a
          href="https://f-links-shortener.herokuapp.com/register"
          className="sign"
        >
          Sign Up
        </a>
      </li>
    </header>
  );
};
export default Header;
