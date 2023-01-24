import React from 'react';
import "../styles/armypoint.css"

const ArmyPoint = () => {
  return (
    <div className="ArmyPoint">
      <div className="ap-box">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='carousel-content d-flex justify-content-center align-items-center'>
                <div className='carousel-subcontent'>Question-1</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='carousel-content d-flex justify-content-center align-items-center'>
                <div className='carousel-subcontent'>Question-2</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='carousel-content d-flex justify-content-center align-items-center'>
                <div className='carousel-subcontent'>Question-3</div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ArmyPoint;