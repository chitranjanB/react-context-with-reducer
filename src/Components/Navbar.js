import React from 'react'
import { useNavigate } from 'react-router-dom'
function Navbar({ view, add }) {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MD cart</a>


          <div className="" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            </ul>
            {view &&
              <span className="navbar-text" onClick={() => navigate("/add")}>

                <i className="fas fa-cart-plus mx-3"></i>
              </span>}
            {add &&
              <span className="navbar-text" onClick={() => navigate("/")}>

                <i className="fas fa-shopping-cart mx-3"></i>
              </span>}

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
