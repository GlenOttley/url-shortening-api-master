import React from 'react';
import shortlyLogo from "../images/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <object 
        data={shortlyLogo} 
        className="footer__logo" 
        >
          logo
        </object>
        <ul className="footer__list">
          <li className="footer__item">
            <p className="footer__link footer__link--highlight">Features</p>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">Link Shortening</a>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">Branded Links</a>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">Analytics</a>
          </li>
        </ul>

        <ul className="footer__list">
          <li className="footer__item">
            <p className="footer__link footer__link--highlight">Resources</p>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">Blog</a>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">Developers</a>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">Support</a>
          </li>
        </ul>

        <ul className="footer__list">
          <li className="footer__item">
            <p className="footer__link footer__link--highlight">Company</p>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">About</a>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">Our Team</a>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">Careers</a>
          </li>
          <li className="footer__item">
            <a href="/#" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <i className="footer__icon fab fa-lg fa-facebook"></i>
          <i className="footer__icon fab fa-lg fa-twitter"></i>
          <i className="footer__icon fab fa-lg fa-pinterest"></i>
          <i className="footer__icon fab fa-lg fa-instagram"></i>
        </div>

      </div>
    </div>
  )
}
