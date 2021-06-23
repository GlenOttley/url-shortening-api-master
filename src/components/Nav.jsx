import shortlyLogo from "../images/logo.svg";

function Nav({ breakPoints, toggleMenu, showMenu }) {

  return (
    <div className="nav">
      <div className="container">
        <div className="row spaced nav__inner">
          <img 
          src={shortlyLogo} 
          alt="shortly" 
          className="nav__logo" 
          />
          {breakPoints.mobile ?
          <i 
          className={
            showMenu ? "fas fa-times fa-lg nav__hamburger"
            : "fas fa-bars fa-lg nav__hamburger"
          }
          onClick={toggleMenu}></i>
          :
          <ul className="nav__list row sm">
            <li className="nav__item">
              <a href="/#" className="nav__link">Features</a>
            </li>
            <li className="nav__item">
              <a href="/#" className="nav__link">Pricing</a>
            </li>
            <li className="nav__item">
              <a href="/#" className="nav__link">Resources</a>
            </li>
            <li className="nav__item">
              <a href="/#" className="nav__link">Login</a>
            </li>
            <li className="nav__item">
              <a href="/#" className="nav__link btn">Sign Up</a>
            </li>
          </ul>
          } 
        </div>
      </div>
    </div>
  )
}

export default Nav