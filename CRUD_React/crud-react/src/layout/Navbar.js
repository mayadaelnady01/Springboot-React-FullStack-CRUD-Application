import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgb(151, 98, 137)' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ marginLeft: '30px' }}>FullStack CRUD App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto">
            <Link className="btn btn-outline-light" to="/adduser" style={{ marginRight: '40px' }}>Add User</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
