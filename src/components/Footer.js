// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="grupo-1">
        <div class="box">
          <figure>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/img/logoXV1.png`}
                alt="Logo"
              ></img>
            </a>
          </figure>
        </div>
        <div class="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?
          </p>
        </div>
        <div class="box">
          <h2>MIS REDES SOCIALES</h2>
          <div class="red-social">
            <a
              href="https://www.facebook.com"
              class="fa fa-facebook"
              target="_blank"
              rel="noreferrer"
              alt="Facebook"
            >
              &nbsp;Facebook
            </a>
            <a
              href="https://www.instagram.com"
              class="fa fa-instagram"
              target="_blank"
              rel="noreferrer"
              alt="Instagram"
            >
              &nbsp;Instagram
            </a>
            <a
              href="https://twitter.com"
              class="fa fa-twitter"
              target="_blank"
              rel="noreferrer"
              alt="Twitter"
            >
              &nbsp;Twitter
            </a>
            <a
              href="https://github.com/XavierlVill2525"
              class="fa fa-github"
              target="_blank"
              rel="noreferrer"
              alt="Github"
            >
              &nbsp;Github
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <small>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/XavierlVill2525"
            class="hidden-link"
            target="_blank"
            rel="noreferrer"
          >
            <b>Xavier Villavicencio.</b>
          </a>{" "}
          Todos los derechos reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
