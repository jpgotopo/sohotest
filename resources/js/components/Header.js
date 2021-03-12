import React, { Component } from 'react';

import ReactDOM from 'react-dom';
class Header extends Component {
  render() {

    
    return (
      <header id="home">
        <div class="site-wrap col-md-10">
            <div className="site-navbar mt-4">
                <div className="container py-1">
                    <div className="row align-items-center">
                        <div className="col-8 col-md-8 col-lg-4">
                            <div className="logo mb-0">
                                <img src="../images/logo-soho-jpg" alt="logo soho"></img>
                            </div>
                        </div>
                        <div className="col-4 col-md-4 col-lg-8">
                            <nav id="site-navigation text-right text-md-right">

                                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Mostrar Navegación</a>
                                <a className="mobile-btn" href="#home" title="Hide navigation">Ocultar Navegación</a>

                                <ul id="nav" className="nav site-menu">
                                
                                    <li><a className="smoothscroll" href="#inicio">inicio</a></li>
                                    <li><a className="smoothscroll" href="#nosotros">nosotros</a></li>
                                    <li><a className="smoothscroll" href="#servicios">servicios</a></li>
                                    <li><a className="smoothscroll" href="#testimonials">casos de éxito</a></li>
                                    <li><a className="smoothscroll" href="#contact">contacto</a></li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                
                </div>
            </div>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline mb-2 my-2">Nos especializamos en</h1>
                    <h1>interfaces digitales que los usuarios aman</h1>
                    <hr />
                    
                </div>
            </div>
        </div>
        

      

      

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}