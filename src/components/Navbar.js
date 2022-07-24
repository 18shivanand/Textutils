import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black " >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{color: "#61dafb"}}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active mine" aria-current="page" href="/" style={{color: "#61dafb"}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={{color: "#61dafb"}}>{props.about}</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" style={{color: "#61dafb"}}>Search</button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired, // we have to pass props in a component
    about : PropTypes.string.isRequired

}

// when we don't send any props we can use default props

// Navbar.defaultProps = {
//     title : "set title",
//     about : "it's about me"
// }
