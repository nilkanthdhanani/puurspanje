import React from 'react'
import './footer.scss';
import { logoWhite, Facebook, Instagram, twitter } from '../../assets/images/svg'
import { elsevier, fd, rtl4, rtlz, second } from '../../assets/images/png'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-logo">
            <img src={logoWhite} alt="logoWhite" />
            <div className="footer-logo-media">
              <a target='blank' href="https://www.facebook.com">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a target='blank' href="https://x.com/?lang=en">
                <img src={twitter} alt="twitter" />
              </a>
              <a target='blank' href="https://www.instagram.com/">
                <img src={Instagram} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="footer-text">
            <div className="footer-text-box">
              <h3>Menu</h3>
              <a href="regio">Meer in de regio</a>
              <a href="verhuurgarantie">Verhuurgarantie</a>
              <a href="spanje">Aanbod Huizen Spanje</a>
              <a href="zoekprofiel">Zoekprofiel</a>
              <a href="over">Over</a>
            </div>
            <div className="footer-text-box">
              <h3>Ontdek</h3>
              <a href="events">Events</a>
              <a href="refrenties">Refrenties</a>
              <a href="blog">Blog</a>
              <a href="contact">Contact</a>
              <a href="cobo">Cobo Roig</a>
              <a href="puurspanje">Puurspanje Wielerteam</a>
            </div>
          </div>
          <div className="footer-last">
            <h4>Juridische mededeling</h4>
            <div className="footer-last-img">
              <img src={elsevier} alt="elsevier" />
              <img src={fd} alt="fd" />
              <img src={rtl4} alt="rtl4" />
              <img src={rtlz} alt="rtlz" />
              <img src={second} alt="second" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
