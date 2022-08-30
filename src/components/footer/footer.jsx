import React from "react";
import { locale } from "../../core/i18n";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <ul className="list-unstyled">
                <li className="text-uppercase fw-bold">Company</li>
                <a href="/about" className="nav-item nav-link">
                  <li>About</li>
                </a>
                <a href="/buy" className="nav-item nav-link">
                  <li>Buy Property</li>
                </a>
                <a href="/rent" className="nav-item nav-link">
                  <li>Rent Apartment</li>
                </a>
              </ul>
            </div>
            <div class="col-sm">
              <ul className="list-unstyled">
                <li className="text-uppercase fw-bold">Contact</li>
                <li className="nav-item nav-link">
                  {locale.label.contactNumber}
                </li>
              </ul>
            </div>
            <div class="col-sm">
              <FaFacebook size={30} />
              <FaTwitter className="ms-3" size={30} />
              <FaYoutube className="ms-3" size={30} />
              <FaLinkedinIn className="ms-3" size={30} />
            </div>
          </div>
        </div>
        <span>{locale.footerNames.footerMainText}</span>
      </div>
    </>
  );
};

export default Footer;
