import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className='logo'>
        <img src="https://d2lk14jtvqry1q.cloudfront.net/media/small_GUVI_1_c02a18fad7.png" alt="Guvi Logo" />
        </span>
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>  
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> {/* Added justify-content-end */}
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                COURSES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                LIVE CLASSES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PRACTICE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                RESOURCES
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://cdn.dribbble.com/userupload/8047713/file/original-28afdc61c3219b1f570f491cbe9b959b.jpg?crop=8x48-772x621&resize=400x300&vertical=center" alt="First slide" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
