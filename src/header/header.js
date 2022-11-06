import "../base/base.css";
import "../routes/login/login.css";

const Header = () => {
  return (
    <header className="header_container">
      <li>
        <i className="icons fa-solid fa-house"></i>
        <a href="http://localhost:3000/" className="sign">
          Main
        </a>
      </li>
      <li>
        <i className="icons fa-solid fa-right-to-bracket"></i>
        <a href="http://localhost:3000/home/" className="sign">
          Home
        </a>
      </li>
      <li>
        <i className="icons fa-solid fa-right-to-bracket"></i>
        <a href="http://localhost:3000/login/" className="sign">
          Sign In
        </a>
      </li>
      <li>
        <i className="icons fa-solid fa-right-to-bracket"></i>
        <a href="http://localhost:3000/register" className="sign">
          Sign Up
        </a>
      </li>
    </header>
  );
};
export default Header;
