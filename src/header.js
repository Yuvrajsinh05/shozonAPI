import React from 'react';
import './header.css'

const Header = (props) => {
    return (
      
            <header>
                <div id="nav">
                    <input id="nav-toggle" type="checkbox"/>
                    <ul className="links">
                        <li><a href="#home">iSHOPZON</a></li>
                        <li><a href="#about"><i className="fa-solid fa-location-crosshairs"></i>&nbsp;Address</a></li>
                        <li><a href="#work"><b>Account & Lists</b> <i className="fa-solid fa-caret-down"></i></a></li>
                        <li><a href="#projects">Orders</a></li>
                        <li><a href="#cart"><i className="fa-thin fa-cart-shopping-fast">cart</i></a></li>
                    </ul>
                    <label htmlFor="nav-toggle" className="icon-burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                    <div className="logo">
                        <div className="logolist">
                            <input className="w-75" type="search"/>&nbsp;
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>

                <nav id='nav2' className="navbar navbar-light bg-light w-100 nav2">

                    <div className="container-fluid">
                        <a className="navbar-brand btn btn-outline-dark m-2" href="#">Best Sellers</a>
                        <a className="navbar-brand  btn btn-outline-dark m-2 " href="#">Mobile</a>
                        <a className="navbar-brand  btn btn-outline-dark m-2" href="#">Customer Service</a>
                        <a className="navbar-brand btn btn-outline-dark m-2 " href="#">Prime</a>
                        <a className="navbar-brand btn btn-outline-dark m-2 " href="#">Fashion</a>
                        <a className="navbar-brand  btn btn-outline-dark m-2" href="#">Books</a>
                        <a className="navbar-brand  btn btn-outline-dark m-2" href="#">New Release</a>


                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                            All
                        </button>

                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><i className="fa-solid fa-circle-user"></i>
                                    Hello,sign in</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>

                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Trending
                                        </a>
                                        <ul className="dropdown-menu" style={{zIndex: 10000}} aria-labelledby="offcanvasNavbarDropdown">
                                            <li><a className="dropdown-item" href="#">Best Sellers</a></li>
                                            <li><a className="dropdown-item" href="#">New Release</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">other</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Shop By Department
                                        </a>
                                        <ul className="dropdown-menu"  style={{zIndex: 10000}} aria-labelledby="offcanvasNavbarDropdown">
                                            <li><a className="dropdown-item" href="#">Electronics</a></li>
                                            <li><a className="dropdown-item" href="#">Men's Fashion</a></li>
                                            <li><a className="dropdown-item" href="#">women's Fashion</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">See all</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <hr className="dropdown-divider"/>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>

                                <br/><br/>
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Help & Setting
                                        </a>
                                        <ul className="dropdown-menu"  style={{zIndex: 10000}} aria-labelledby="offcanvasNavbarDropdown">
                                            <li><a className="dropdown-item" href="#">Your Account</a></li>
                                            <li><a className="dropdown-item" href="#">sign In</a></li>
                                            <li><a className="dropdown-item" href="#">Customer Service</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">&copy; iUV</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    
    )
}

export default Header;