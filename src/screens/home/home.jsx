import React from "react"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
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

        }
    },
};

const Home = () => {
  return (
    <>
     <div class="m-2"> 
     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src='../images/home1.jpg' class="d-block w-100" alt="..." height="500px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Search Your Dream Home </h5>
        <p>Find beautiful apartment, flat and villas.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src='../images/home2.jpg' class="d-block w-100" alt="..." height="500px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Explore by Locations</h5>
        <p>Find home in amazing localities.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src='../images/home3.jpg' class="d-block w-100" alt="..." height="500px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Rent Apartment</h5>
        <p>Find rented appartment at affordable rates.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="customerDiv">
<h2 className="customer">Our Happy Customers</h2>

<OwlCarousel 
          className="owl-theme"  
        
          {...options} 
           >  
    <div>
      <div class="card text-center">
      <img class="card-img-top"  height="200px " src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
        <div class="card-body">
          <h5>Ronne Galle <br />
            <span> Project Manager </span>
          </h5>
          <p class="card-text">“ We have found our dream home here. Amazing options to consider” </p>
        </div>
      </div>
    </div>        
    <div>
      <div class="card text-center">
      <img class="card-img-top"  height="200px "  src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301" alt=""/>
        <div class="card-body">
          <h5>Missy Limana<br />
            <span> Engineer </span>
          </h5>
          <p class="card-text">“ Thank you so much for all your assistance in finding us a very decent expat tenant for our villa  @Abode. We are very much satisfied with the service of Abode®.  ” </p>
        </div>
      </div>
    </div>
    <div>
      <div class="card text-center">
      <img class="card-img-top" height="200px "  src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302" alt=""/>
        <div class="card-body">
          <h5>Martha Brown<br />
            <span> Project Manager </span>
          </h5>
          <p class="card-text">“They are a very professional real estate agency in Chennai with good selection of places. More importantly, they spend time with the client to show variety of options.  ” </p>
        </div>
      </div>
    </div>
    <div>
      <div class="card text-center">
      <img class="card-img-top"  height="200px "  src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303" alt=""/>
        <div class="card-body">
          <h5>Hanna Lisem<br />
            <span> Project Manager </span>
          </h5>
          <p class="card-text">“ I am a proud owner of a beautiful Villa.Have already referred you to a couple of friends! Thanks and Regards ” </p>
        </div>
      </div>
    </div>
    
      </OwlCarousel>  
     
    </div>
     </div>
    </>
  )
}

export default Home
