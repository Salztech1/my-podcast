import React from 'react';
import logo from '../../src/Images/Salz Logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white  ">
    <div className="container-fluid">
      <a className="navbar-brand" href=""><img src={logo} alt='' className='image-fluid logo2' /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse margin" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
          <li className="nav-item">
            <a className="nav-link active  " aria-current="page" href="#">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#">PODCAST</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#">WATCH</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#">LEARN</a>
          </li>
        </ul>
        <form className="d-flex d-blck ">
          <input className="form-control me-2 padding font1" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn visit border text-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
