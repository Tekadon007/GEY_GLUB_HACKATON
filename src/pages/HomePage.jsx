import React from "react";
import logo from "../home_fon/logo.png";
import "../home_fon/home.css";
import "../styles/Footer.css";

const HomePage = () => {
  return (
    <>
      <div>
        <h1 className="text_home">BEESHOP</h1>
        <img className="fonen" src={logo} alt="ygjg" />
        <footer class="footer">
          <ul class="social-icon">
            <li class="social-icon__item">
              <a
                class="social-icon__link"
                target="_blank"
                href="https://ru-ru.facebook.com/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li class="social-icon__item">
              <a
                class="social-icon__link"
                target="_blank"
                href="https://www.youtube.com/channel/UCTezsI5VDmfw-Taw-NbvZHQ">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
            <li class="social-icon__item">
              <a
                class="social-icon__link"
                target="_blank"
                href="https://github.com/bunnykkk">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li class="social-icon__item">
              <a
                class="social-icon__link"
                target="_blank"
                href="https://www.instagram.com/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="menu__item">
              <a class="menu__link" href="/">
                Home
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#">
                About
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#">
                Services
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#">
                Team
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <p>&copy;2022 Ramin&Islam | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
