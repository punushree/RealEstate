import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { locale } from "../../core/i18n";
import { Image as ConstImg } from "../../components/Image Variables/ImageVariables";

const options = {
  margin: 8,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

const Home = () => {
  return (
    <>
      <div class=" .container-fluid m-2">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="5000">
              <img
                src={ConstImg.SliderImg1}
                class="d-block w-100"
                alt="..."
                height="500px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>
                  <b>{locale.label.exploreByLocations}</b>
                </h5>
                <p>
                  <b>{locale.label.findHomeInAmazingLocalities}</b>
                </p>
              </div>
            </div>
            <div class="carousel-item" data-interval="5000">
              <img
                src={ConstImg.SliderImg2}
                class="d-block w-100"
                alt="..."
                height="500px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>
                  <b>{locale.label.rentApartment}</b>
                </h5>
                <p>
                  <b>{locale.label.findHomeInAmazingLocalities}</b>
                </p>
              </div>
            </div>
            <div class="carousel-item " data-interval="5000">
              <img
                src={ConstImg.SliderImg3}
                class="d-block w-100"
                alt="..."
                height="500px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>
                  <b>{locale.label.searchYourDreamHome} </b>
                </h5>
                <p>
                  <b>{locale.label.findBeautifulApartmentFlatAndVillas}</b>
                </p>
              </div>
            </div>
            <div class="carousel-item" data-interval="5000">
              <img
                src={ConstImg.SliderImg4}
                class="d-block w-100"
                alt="..."
                height="500px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>
                  <b>{locale.label.beautifulInterio}</b>
                </h5>
                <p>
                  <b>{locale.label.findFullyFurnishedUnfurnishedApartment}</b>
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">{locale.label.previous}</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">{locale.label.next}</span>
          </button>
        </div>

        <div className="customerDiv">
          <h2 className="customer">{locale.label.ourHappyCustomers}</h2>

          <OwlCarousel className="owl-theme" {...options}>
            <div>
              <div class="card text-center">
                <img
                  class="card-img-top"
                  height="200px "
                  src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {locale.label.ronneGalle} <br />
                    <span>{locale.label.villaOwner} </span>
                  </h5>
                  <p class="card-text">{locale.label.cardPara1} </p>
                </div>
              </div>
            </div>
            <div>
              <div class="card text-center">
                <img
                  class="card-img-top"
                  height="200px "
                  src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {locale.label.missyLimana}
                    <br />
                    <span> House owner </span>
                  </h5>
                  <p class="card-text">{locale.label.cardPara2} </p>
                </div>
              </div>
            </div>
            <div>
              <div class="card text-center">
                <img
                  class="card-img-top"
                  height="200px "
                  src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {locale.label.peterMartha}
                    <br />
                    <span> {locale.label.tenant} </span>
                  </h5>
                  <p class="card-text">{locale.label.cardPara3} </p>
                </div>
              </div>
            </div>
            <div>
              <div class="card text-center">
                <img
                  class="card-img-top"
                  height="200px "
                  src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {locale.label.hannaLisem}
                    <br />
                    <span> Agent </span>
                  </h5>
                  <p class="card-text">{locale.label.cardPara4} </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Home;
