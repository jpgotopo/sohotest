import React, { Component } from 'react';

import ReactDOM from 'react-dom';
class Header extends Component {
  render() {


    return (
        <div class="base">
            <section class="header5 cid fullscreen">
           <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm transparent bg-color">
               <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <div class="hamburger">
                       <span>inicio</span>
                       <span>nosotros</span>
                       <span>servicios</span>
                       <span>casos de éxito</span>
                       <span>únete al equipo</span>
                       <span>contacto</span>
                   </div>
                   

               </button>
                <div class="menu-logo">
                       <div class="navbar-brand">
                           <span class="navbar-logo">
                               <a href="#"><img src="../../images/logo-soho.png" alt="logo-sh"></img></a>
                           </span>
                       </div>
                </div>
           </nav>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li class="nav-item">
                        <a class="nav-link link text-white display-4" href="">
                        inicio
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-white display-4" href="">
                        nosotros
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-white display-4" href="">
                        servicios
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-white display-4" href="">
                        casos de éxito
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-white display-4" href="">
                        únete al equipo
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-white display-4" href="">
                        contacto
                        </a>
                    </li>
                </ul>
           </div> 
        </section>
        <section class="header5 cid-srs7ZN5URW mbr-fullscreen mbr-parallax-background" id="header5-0">
            <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(35, 35, 35);">
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="mbr-white col-md-10">
                        <h1 class="mbr-section-title align-center pb-3 mbr-fonts-style display-1">
                            Nos especializamos en
                        </h1>
                        <h1 class="green mbr-section-title align-center pb-3 mbr-fonts-style display-1">
                            interfaces digitales que los usuarios aman
                        </h1>
                        
                        <div class="mbr-section-btn align-center">
                            <a class="btn btn-md btn-secondary display-4" href=" ">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        
        
        
     
    );
  }
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
