import React from "react";
import { locale } from "../../core/i18n";
import { Image as ConstImg } from "../Image Variables/ImageVariables";

const Header = () => {
  return (
    <>
      <div className="m-2">
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white ">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <img src={ConstImg.HomeLogo} alt="" height="40" />
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav  ms-auto">
                <a href="/" className="nav-item nav-link ">
                  {locale.headerNames.home}
                </a>
                <a href="/about" className="nav-item nav-link">
                  {locale.headerNames.about}
                </a>
                <a href="/buy" className="nav-item nav-link">
                  {locale.headerNames.buyProperty}
                </a>
                <a href="/rent" className="nav-item nav-link">
                  {locale.headerNames.rentApartment}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
