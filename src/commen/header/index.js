import React from 'react'
import './header.scss';
import { logo, dropdown } from '../../assets/images/svg';

export default function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-div">
            <div className="header-div1">
              <img src={logo} alt="logo" />
              <div className="header-div1-text">
                <div className="header-div1-drop">
                  <span>AANBOD</span>
                  <img src={dropdown} alt="dropdown" />
                </div>
                <div className="header-div1-drop">
                  <span>REGIO</span>
                  <img src={dropdown} alt="dropdown" />
                </div>
                <div className="header-div1-drop">
                  <span>MEER</span>
                  <img src={dropdown} alt="dropdown" />
                </div>
              </div>
              <a href="evenementen">Evenementen</a>
            </div>
            <div className="header-div2">
              <button>Zoekprofilel</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
