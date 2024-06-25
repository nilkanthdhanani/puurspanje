import React from 'react'
import './home.scss';
import { more, deel, bed, bath, batch, vr, fordot, rightArrow, mail } from '../../assets/images/svg';
import { heroBanner, horadada } from '../../assets/images/jpg';
import { meer1, meer2, meer3, lady } from '../../assets/images/png';

export default function Home() {
  return (
    <div>
      <section className='guide'>
        <div className="container">
          <div className="guide-div">
            <a href="home">Home</a>
            <img src={more} alt="more" />
            <a href="home">Costa Calida</a>
            <img src={more} alt="more" />
            <a id='selected' href="home">San Javier</a>
          </div>
        </div>
      </section>

      <section className='hero-banner'>
        <div className="container">
          <div className="hero-banner-div">
            <div className="hero-banner-div1">
              <span>Costa Calida</span>
              <h2>Luxe villa aan zee in Alicante</h2>
              <p>La Manga del Mar Menor, Costa Cálida, Spanje </p>
              <div className="hero-banner-div1-button">
                <button> <img src={deel} alt="deel" /> Deel</button>
              </div>
            </div>
            <div className="hero-banner-div2">
              <img src={heroBanner} alt="heroBanner" />
            </div>
          </div>
        </div>
      </section>

      <section className='meer'>
        <div className="container">
          <div className="meer-div">
            <div className="meer-div1">
              <img src={meer1} alt="meer1" />
              <div className="meer-div1-content">
                <div className="meer-div1-content1">
                  <div className="meer-div1-batch">
                    <img src={batch} alt="batch" />
                    <img src={vr} alt="vr" />
                  </div>
                  <div className="meer-div1-fotos">
                    <img src={fordot} alt="fordot" />
                    <h3>Meer Foto's</h3>
                  </div>
                </div>
                <h2>€ 2.000.995</h2>
                <div className="meer-div1-content2">
                  <div className="meer-div1-bed">
                    <img src={bed} alt="bed" />
                    <h4>3 Slaapkamers</h4>
                  </div>
                  <div className="meer-div1-bed">
                    <img src={bath} alt="bath" />
                    <h4>2 Badkamers</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="meer-div1">
              <img src={meer2} alt="meer2" />
              <div className="meer-div1-content">
                <div className="meer-div1-content1">
                  <div className="meer-div1-batch">
                    <img src={batch} alt="batch" />
                    <img src={vr} alt="vr" />
                  </div>
                  <div className="meer-div1-fotos">
                    <img src={fordot} alt="fordot" />
                    <h3>Meer Foto's</h3>
                  </div>
                </div>
                <h2>€ 3.500.995</h2>
                <div className="meer-div1-content2">
                  <div className="meer-div1-bed">
                    <img src={bed} alt="bed" />
                    <h4>5 Slaapkamers</h4>
                  </div>
                  <div className="meer-div1-bed">
                    <img src={bath} alt="bath" />
                    <h4>3 Badkamers</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="meer-div1">
              <img src={meer3} alt="meer3" />
              <div className="meer-div1-content">
                <div className="meer-div1-content1">
                  <div className="meer-div1-batch">
                    <img src={batch} alt="batch" />
                    <img src={vr} alt="vr" />
                  </div>
                  <div className="meer-div1-fotos">
                    <img src={fordot} alt="fordot" />
                    <h3>Meer Foto's</h3>
                  </div>
                </div>
                <h2>€ 1.000.995</h2>
                <div className="meer-div1-content2">
                  <div className="meer-div1-bed">
                    <img src={bed} alt="bed" />
                    <h4>2 Slaapkamers</h4>
                  </div>
                  <div className="meer-div1-bed">
                    <img src={bath} alt="bath" />
                    <h4>1 Badkamers</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='beschrijving'>
        <div className="container">
          <div className="beschrijving-grid">
            <div className="beschrijving-grid1">
              <h2>Beschrijving</h2>
              <p>Het is dé vakantieplek van de Spanjaarden. Vele Madrilenen en inwoners van Murcia stad hebben hier hun vakantieverblijf. La Manga del Mar Menor behoort deels tot San  Javier en het zuidelijke deel behoort tot de gemeente Cartagena.</p>
              <p>Op de stranden van La Manga del Mar Menor kunt u zowel van de opkomende als de ondergaande zon genieten. De breedte van de landtong varieert tussen de 100 en 1200 meter. Op de stranden vindt u talloze beach clubs, restaurants en watersport mogelijkheden.</p>
            </div>
            <div className="beschrijving-grid2">
              <h2>Kenmerken</h2>
              <div className="beschrijving-grid2-box">
                <div className="bj-grid2-box-text">
                  <span>Slaapkamers</span>
                  <h3>6</h3>
                </div>
                <div className="bj-grid2-box-text">
                  <span>Wonen</span>
                  <h3>168 m²</h3>
                </div>
                <div className="bj-grid2-box-text">
                  <span>Perceel</span>
                  <h3>400 m</h3>
                </div>
                <div className="bj-grid2-box-text">
                  <span>Badkamers</span>
                  <h3>2</h3>
                </div>
                <div className="bj-grid2-box-text">
                  <span>Terras</span>
                  <h3>10 m²</h3>
                </div>
                <div className="bj-grid2-box-text">
                  <span>Garage</span>
                  <h3>30 m²</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='location'>
        <div className="container">
          <div className="location-grid">
            <div className="location-grid1">
              <h2>Unieke aspecten</h2>
              <div className="location-grid1-button">
                <button>Wandelafstand strand</button>
                <button>Gemeenschappelijk zwembad</button>
                <button>Near the sea</button>
                <button>On golf course</button>
                <button>Gemeenschappelijke tuin</button>
                <button>Haven op wandelafstand</button>
              </div>
            </div>
            <div className="location-grid2">
              <h2>Locatie</h2>
              <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808945.6829210247!2d-1.8359911039697232!3d37.62700329689065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd64c5e2bd323b95%3A0xea0869c778447f94!2sCosta%20C%C3%A1lida%2C%20Murcia%2C%20Spain!5e0!3m2!1sen!2sin!4v1719229640017!5m2!1sen!2sin"></iFrame>
            </div>
          </div>
        </div>
      </section>

      <section className='regio'>
        <div className="container">
          <div className="regio-grid">
            <div className="regio-grid1">
              <h2>De Regio</h2>
              <div className="regio-grid1-box">
                <div className="regio-grid1-box-img">
                  <img src={horadada} alt="horadada" />
                  <div className="horadada-div">
                    <h3>Torre de la Horadada</h3>
                  </div>
                </div>
                <div className="regio-grid1-content">
                  <p>Torre de la Horadada is gelegen aan de stranden van de Middellandse Zee. Het dorp behoort tot de gemeente</p>
                  <span>Costa Calida</span>
                  <div className="rgc-head">
                    <h4>Verken de Regio</h4>
                    <img src={rightArrow} alt="rightArrow" />
                  </div>
                  <div className="rgc-button">
                    <button>Ontdekken <img src={rightArrow} alt="rightArrow" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="regio-grid2">
              <h2>Meer Informatie</h2>
              <p>Wil je meer weten over deze woning of heb je vragen over de regio? </p>
              <div className="regio-grid2-button">
                <button>Contactaanvraag</button>
                <button>Brochure</button>
              </div>
              <span>Klik op bovenstaande knoppen om informatie aan te vragen of een brochure te downloaden.</span>
            </div>
          </div>
        </div>
      </section>

      <section className='woningen'>
        <div class="container">
          <div class="woningen-head">
            <h2>Vergelijkbare woningen</h2>
          </div>
          <div className="woningen-div">
            <div className="woningen-div1">
              <img src={meer1} alt="meer1" />
              <div className="woningen-div1-content">
                <p>Appartement in San Pedro del Pinatar, Costa Cálida, Spanje</p>
                <h2>€ 550.000</h2>
                <div className="woningen-div1-content1">
                  <div className="woningen-div1-bed">
                    <img src={bed} alt="bed" />
                    <h4>3 Slaapkamers</h4>
                  </div>
                  <div className="woningen-div1-bed">
                    <img src={bath} alt="bath" />
                    <h4>2 Badkamers</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="woningen-div1">
              <img src={meer1} alt="meer1" />
              <div className="woningen-div1-content">
                <p>Appartement in San Pedro del Pinatar, Costa Cálida, Spanje</p>
                <h2>€ 550.000</h2>
                <div className="woningen-div1-content1">
                  <div className="woningen-div1-bed">
                    <img src={bed} alt="bed" />
                    <h4>3 Slaapkamers</h4>
                  </div>
                  <div className="woningen-div1-bed">
                    <img src={bath} alt="bath" />
                    <h4>2 Badkamers</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="woningen-div1">
              <img src={meer1} alt="meer1" />
              <div className="woningen-div1-content">
                <p>Appartement in San Pedro del Pinatar, Costa Cálida, Spanje</p>
                <h2>€ 550.000</h2>
                <div className="woningen-div1-content1">
                  <div className="woningen-div1-bed">
                    <img src={bed} alt="bed" />
                    <h4>3 Slaapkamers</h4>
                  </div>
                  <div className="woningen-div1-bed">
                    <img src={bath} alt="bath" />
                    <h4>2 Badkamers</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='stegen'>
        <div className="container">
          <div className="stegen-grid">
            <div className="stegen-grid1">
              <p>Bij Puurspanje weten we hoe belangrijk een persoonlijke aanpak is.</p>
              <div className="stegen-grid1-profile">
                <div className="profile-img">
                  <img src={lady} alt="lady" />
                </div>
                <div className="profile-text">
                  <h3>Daphne van der Stegen</h3>
                  <a href="mailid">Stuur een email <img src={mail} alt="mail" /></a>
                </div>
              </div>
            </div>
            <div className="stegen-grid2">
              <h2>Ontvang de laatste informatie</h2>
              <p>97% van onze abonnees beoordeelt onze nieuwsbrief als nuttig en positief.</p>
              <div className="stegen-grid2-input">
                <input type="email" placeholder='Emailadres' />
                <div className="input-right-arrow">
                  <img src={rightArrow} alt="rightArrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="last-section">
        <div class="nog-green">
          <h6>Nog geen zoekprofiel aangemaakt?</h6>
          <p>Krijg automatisch de beste woningen toegestuurd op basis van uw persoonlijke voorkeuren.</p>
          <button type="button">Aanmaken</button>
        </div>
      </section>
    </div>
  )
}
