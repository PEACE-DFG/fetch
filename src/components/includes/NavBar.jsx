import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-light" >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Shoplex</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
                <Link  to="/">Home</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <Link  to="/AboutUs">About</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <Link  to="/Products">Products</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <Link  to="/Services">Services</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <Link  to="/Register">Register</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <Link  to="/Blog">Blog</Link>
            </a>
          </li>
          
          </ul>
          
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-warning" type="submit">Search</button>
        </form>
          
      </div>
    </div>
  </nav>
    </div>
    )
}

export default NavBar