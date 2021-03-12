import React, { Component } from 'react';

class Header extends Component {
  render() {

    
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Mostrar Navegación</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Ocultar Navegación</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#inicio">inicio</a></li>
	         <li><a className="smoothscroll" href="#nosotros">nosotros</a></li>
            <li><a className="smoothscroll" href="#servicios">servicios</a></li>
            <li><a className="smoothscroll" href="#testimonials">casos de éxito</a></li>
            <li><a className="smoothscroll" href="#contact">contacto</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Nos especializamos en</h1>
            <h1>interfaces digitales que los usuarios aman</h1>
            <hr />
            
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