import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => {
  const nav = [
    { item: "About", href: "/about" },
    { item: "Membership", href: "/membership" },
    { item: "Leaders", href: "/leaders" },
    { item: "Events", href: "/events" },
    { item: "Job Postings", href: "/job-postings" },
    { item: "Contact", href: "/contact" },
  ]
  let menuCount = 0,
  docBody = document.getElementsByTagName('body')[0];
  const stickyHeader = () => {
    if(window.pageYOffset > 100){
      docBody.classList.add('scrolled');
    } else {
      docBody.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', stickyHeader);
  const handleMenuToggle = () => {
    if(menuCount === 0){
      docBody.classList.add('activate-navigation');
      menuCount++;
    } else {
      docBody.classList.remove('activate-navigation');
      menuCount = 0;
    }
  }
  return(
    <div className="headerContainer">
      <div className="siteHeader">
        <div className="headerLeft">
          <p><NavLink to="/"><img src={logo} alt="Young Professionals of Lawton Logo" /></NavLink></p>
        </div>
        <div className="headerRight">
          <div className="topBar">
            <ul>
              <li><a className="lmg-fab lmg-fa-facebook-f" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span>Facebook</span></a></li>
              <li><a className="lmg-fab lmg-fa-linkedin-in" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a></li>
              <li><a className="lmg-fab lmg-fa-instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span>Instagram</span></a></li>
              <li><a className="lmg-fab lmg-fa-twitter" href="https://twitter.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><span>Twitter</span></a></li>
            </ul>
        </div>
          <nav>
            <ul>
              {nav.map((nav, i) => {
                return(
                  <li key={i}><NavLink to={nav.href}>{nav.item}</NavLink></li>
                )
              })}
            </ul>
            </nav>
          <div className="menu-toggle-container" onClick={handleMenuToggle}>
            <div className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;