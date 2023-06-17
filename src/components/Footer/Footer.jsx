import "./Footer.css";
import React from "react";
import logo from "./imgs/logo.jpeg";
import facebook from "./imgs/facebook.svg";
import instagram from "./imgs/instagram.svg";
import mastercard from "./imgs/mastercard.jpeg";
import visa from "./imgs/visa.jpeg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <img
        src="https://www.transparentpng.com/thumb/puma-logo/It9NZf-puma-logo-transparent.png"
        alt="Puma Logo"
        className="footer__logo"
      />

      <div className="footer__topright">
        <p className="footer__topright_text">
          Самые актуальные предложения и акции!
        </p>
        <br />
        <input
          className="footer__topright_input"
          type="text"
          placeholder="  Email*"
        />
      </div>

      <div className="lines">
        <hr className="left" />
        <hr className="center" />
        <hr className="right" />
      </div>

      <div className="info">
        <div className="footer__rules">
          <h4 className="footer__rules_title">ПРАВИЛА PUMA</h4>

          <nav className="footer__menu">
            <ul className="footer__menu-items">
              <li className="footer__menu-items_item">
                <a
                  className="footer__menu-items_item-link"
                  href="https://pumakyrgyzstan.kg/ru/vacancies"
                >
                  Вакансии
                </a>
              </li>

              <li className="footer__menu-items_item">
                <a
                  className="footer__menu-items_item-link"
                  href="https://pumakyrgyzstan.kg/ru/page/podlinnost-tovara"
                >
                  Подлинность товара
                </a>
              </li>

              <li className="footer__menu-items_item">
                <a
                  className="footer__menu-items_item-link"
                  href="https://pumakyrgyzstan.kg/ru/page/terms-and-conditions"
                >
                  Условия использования
                </a>
              </li>

              <li className="footer__menu-items_item">
                <a
                  className="footer__menu-items_item-link"
                  href="https://pumakyrgyzstan.kg/ru/page/rules"
                >
                  Система скидок
                </a>
              </li>

              <li className="footer__menu-items_item">
                <a
                  className="footer__menu-items_item-link"
                  href="https://pumakyrgyzstan.kg/ru/page/delivery"
                >
                  Оплата и доставка
                </a>
              </li>

              <li className="footer__menu-items_item">
                <a
                  className="footer__menu-items_item-link"
                  href="https://pumakyrgyzstan.kg/ru/page/warranty"
                >
                  Гарантийные условия
                </a>
              </li>

              <li className="footer__menu-items_item">
                <a
                  className="footer__menu-items_item-link"
                  href="https://pumakyrgyzstan.kg/ru/page/return"
                >
                  Политика возврата и обмена
                </a>
              </li>
              <li className="footer__menu-items_item">
                <a
                  className="footer__menu-items_item-link"
                  href="https://pumakyrgyzstan.kg/ru/page/checkout"
                >
                  Политика Конфиденциальности и безопасности
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__contacts">
          <h4 className="footer__contacts_title">КОНТАКТЫ</h4>
          <p className="footer__contacts_list1">
            <strong>PUMA </strong>
            <strong>
              Кыргызстан, г. Бишкек
              <br />
            </strong>
            <strong>Фирменные магазины PUMA: </strong>
            <br />
            Ежедневно с 10:00 до 22:00
            <br />
            <br />
            <strong>
              <Link to="https://go.2gis.com/x0tyb">
                пр. Чуй, 127 <br />
              </Link>
              (ТЦ "1 000 мелочей"){" "}
            </strong>
            <br />
            <strong>
              Магазин "InterSport" <br />
              Ежедневно с 10:00 до 21:00
            </strong>
            <br />
            <strong>Телефон:</strong>0 (312) 900 840
          </p>

          <p className="footer__contacts_list2">
            <Link to="https://go.2gis.com/kg9av">
              <strong>ул. Киевская, 148</strong>
            </Link>
            <br />
            <strong>ТРЦ "Bishkek Park", 1 этаж </strong>
            <br />
            <strong>Телефон:</strong>
            0 (559) 312 091
            <br />
            <br />
            <Link to="https://go.2gis.com/rbohw">
              <strong>пр. Ч. Айтматова, 21/2 </strong>
            </Link>
            <br />
            <strong>
              пер. Гагарина (район БГУ)
              <br />
              Магазин "InterSport"
              <br />
            </strong>
            Ежедневно с 10:00 до 21:00
            <br />
            <strong>Телефон: </strong>0 (312) 986 840
          </p>
          <p className="footer__contacts_list3">
            <Link to="https://go.2gis.com/3euuy">
              <strong>
                пр. Ч. Айтматова, 3 <br />
              </strong>
            </Link>
            <strong>
              ТРЦ "Asia Mall", 2 этаж <br />
            </strong>
            <strong>Телефон:</strong>
            0 (559) 312 092
            <br />
            <br />
            <strong>HR-служба </strong>
            <br />
            <strong>E-mail:</strong>
            hr.office.gw@gmail.com
          </p>
        </div>

        <div className="footer__title">
          <p>Мы в соцсетях!</p>
        </div>

        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/gwkyrgyzstan/">
              <img src={facebook} alt="Facebook" className="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gwkyrgyzstan/">
              <img src={instagram} alt="Instagram" className="instagram" />
            </a>
          </li>
        </ul>
      </div>

      <hr className="line-end" />
      <div className="footer__end">
        <p className="footer__end_copyright">
          All rights reserved © GHS-COM SRL 2023 - Official distributor for PUMA
          in Moldova <br />
          sub-copyright
        </p>
        <ul className="footer__copyright-payments">
          <p className="footer__copyright-payments_text">Мы принимаем:</p>
          <li>
            <img
              src={mastercard}
              alt="accept_mastercard"
              className="cards mastercard"
            />
          </li>
          <li>
            <img src={visa} alt="accept_visa" className="cards visa" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
