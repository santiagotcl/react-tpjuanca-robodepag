import React from 'react'
import {Link, MemoryRoute} from 'react-router-dom'
import './styles.css';
import logo from './cabin.png';
import logo1 from './cake.png';
import logo2 from './circus.png';
import logo3 from './game.png';
import logo4 from './safe.png';
import logo5 from './submarine.png';


const Portfolio = () => {
    return ( 
        <section className="page-section portfolio" id="portfolio">
        <div className="container">
            
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
           
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
          
            <div className="row">
              
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={logo} alt="" />
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={logo1} alt="" />
                    </div>
                </div>
              
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={logo2} alt="" />
                    </div>
                </div>
            
                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={logo3} alt="" />
                    </div>
                </div>
          
                <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={logo4} alt="" />
                    </div>
                </div>
           
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={logo5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}
export default Portfolio;