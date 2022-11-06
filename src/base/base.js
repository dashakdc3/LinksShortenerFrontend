import "./base.css";
import "../routes/login/login.css";
function Base() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/f39d4e3df1.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className="body-new">
        <header className="header_container">
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
            <i className="icons fa-solid fa-registered"></i>
            <a
              href="https://f-links-shortener.herokuapp.com/register/"
              className="sign"
            >
              Sign Up
            </a>
          </li>
        </header>
        <div className="home-page card-shadow main">
          <div className="card__container main card-shadow ">
            <img
              src="https://www.dignited.com/wp-content/uploads/2019/08/Best-URL-Shortening-Tools-For-2018-1024x768.jpg"
              className="card-img-top card__img"
              alt=""
            />
            <div className="card-body">
              <p className="card-text card_text_update">
                <a
                  href="https://f-links-shortener.herokuapp.com/home/"
                  className="sign"
                >
                  Short The Link
                </a>
              </p>
            </div>
          </div>
          <div className="card__container card-shadow main">
            <img
              src="https://comofuncionaque.com/wp-content/uploads/2015/04/La-URL-es-la-direccion-de-una-informacion-que-se-encuentra-en-un-determinado-alojamiento-o-dominio-de-la-red.png"
              className="card-img-top card__img"
              alt=""
            />
            <div className="card-body">
              <p className="card-text card_text_update">
                <a
                  href="https://f-links-shortener.herokuapp.com/home/"
                  className="sign"
                >
                  My Links
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
export default Base;
