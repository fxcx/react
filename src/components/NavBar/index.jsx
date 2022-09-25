import cartWidget from '../CartWidget';
import react from 'react';


export const NavBar = () => {
    return (
        <div className="container">
        <nav className="nav">
            <div className="nav__brand">
          <a className="nav__link" href="#">logo</a>
           </div>
      <ul className="nav__list">
        <li>
          <a className="nav__link" href="#">categoria 1</a>
        </li>
        <li>
          <a className="nav__link" href="#">categoria 2</a>
        </li>
        <li>
          <a className="nav__link" href="#">
          <cartWidget />
          </a>
        </li>
   </ul>
        </nav>
      </div>
  
    );

}

export default NavBar;