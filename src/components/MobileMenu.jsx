import React, { useRef, useEffect } from 'react';

const MobileMenu = ({ toggleMenu, setShowMenu }) => {

  const menuRef = useRef();

  useEffect(() => {
		let handler = (event) =>  {
			if (!menuRef.current.contains(event.target)
				&& event.target !== document.querySelector(".nav__hamburger")) {
				setShowMenu(false);
			}
		}
		document.addEventListener("mousedown", handler);
		return() => {
			document.removeEventListener("mousedown", handler);
		}
	});

  return (
    <div 
    className="menu container"
    ref={menuRef}
    >
      <ul className="menu__list column">

        <li className="menu__item">
          <a href="/#" className="menu__link">Features</a>
        </li>
        <li className="menu__item">
          <a href="/#" className="menu__link">Pricing</a>
        </li>
        <li className="menu__item">
          <a href="/#" className="menu__link">Resources</a>
        </li>

        <hr className="menu__divider"></hr>

        <li className="menu__item">
          <a href="/#" className="menu__link">Login</a>
        </li>
        <button className="menu__button btn">Sign Up</button>

      </ul>
    </div>
  )
}

export default MobileMenu
