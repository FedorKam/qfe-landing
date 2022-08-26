import { useEffect, useState} from "react";

import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import header_arrow_menu from "../images/header_arrow_menu.svg";

type Props = {
  startLink?: string;
  buyQCTLink?: string;
};

export function Header({ startLink = "", buyQCTLink = "" }: Props) {
  const [isHide, setIsHide] = useState(false);
  const [isMenuButtonClose, setIsMenuButtonClose] = useState(false);

  const handleClickArrow = () => {
    setIsHide((prev) => !prev);
  };

  const handleClickMenuButton = () => {
    setIsMenuButtonClose((prev) => !prev);
  };

  useEffect(() => {
    let prev_scroll_pos = window.pageYOffset;
    const menu_top = document.querySelector('.header__top-line');
    const menu__hide = document.querySelector('.menu__hide');
    window.onscroll = function() {
      const current_scroll_pos = window.pageYOffset;
        if (prev_scroll_pos > current_scroll_pos) {
            menu_top!.classList.add('header__top-line_visible');
            menu_top!.classList.remove('header__top-line_hidden');
        } else {
            menu_top!.classList.remove('header__top-line_visible');
            menu_top!.classList.add('header__top-line_hidden');
            menu__hide!.classList.remove('menu__hide_visible');
        }
        prev_scroll_pos = current_scroll_pos;
    }

    const land_html = document.querySelector("html");
    land_html!.style.scrollBehavior = "smooth";
  });

  useEffect(() => {
    const menu_links = document.querySelectorAll('.menu__item');

    menu_links!.forEach(item => {
      item.addEventListener('click', () => {
        dellActiveMenuLink();
        item.classList.add('active');
      });
    });

    const header__logo = document.querySelector('.header__logo');
    header__logo!.addEventListener('click', () => {
      dellActiveMenuLink();
      document.querySelector('.menu__item_main')!.classList.add('active');
    });

    function dellActiveMenuLink(){
      const active_item = document.querySelectorAll('.menu .active');    
      active_item!.forEach(item => { item.classList.remove('active');});
    }
  });

  return (
    <>
      <div className="header__background"></div>
      <header className="header">
        <div className="header__top-line">
          <a href="#"><img src={logo} className="header__logo" /></a>
          <ul className={`menu ${isMenuButtonClose ? "menu_showed" : ""}`}>
            <li className="menu__item menu__item_main active">
              <a className="menu__link" href="#">
                Главная
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#step-block">
                Твой путь
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#roadmap">
                Roadmap
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#dblock">
                Метавселенная
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#values">
                Идеология
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#bali">
                Недвижимость
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#command">
                Команда
              </a>
            </li>
            <li className="menu__arrow" onClick={handleClickArrow}>
              <a>
                <img src={header_arrow_menu} />
              </a>
            </li>
            <ul className={`menu__hide ${isHide ? "" : "menu__hide_visible"}`}>
              <li className="menu__item">
                <a className="menu__link" href="#partner">
                  Партнерство
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#round">
                  Достижения
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#job">
                  Начать с нами
                </a>
              </li>
            </ul>
          </ul>
          <Link to={buyQCTLink} className="menu__topButton">
            Купить QCT
          </Link>
          <a
            onClick={handleClickMenuButton}
            className={`menu__button ${
              isMenuButtonClose ? "menu__button_close" : ""
            }`}
          >
            <div className="menu__line"></div>
            <div className="menu__line"></div>
            <div className="menu__line"></div>
          </a>
        </div>
        <h1 className="header__h1">
          <i className="header__h1_blue">Создай</i> свой образовательный продукт
          в <i className="h1_blue">метавселенной с технологией Learn to Earn</i>
        </h1>
        <h1 className="header__h1 header__h1__mob">
          <i className="header__h1_blue">Создай</i>
          <br />
          свой продукт в <i className="h1_blue">метавселенной</i>
        </h1>
        <span className="header__text">
          Интуитивно понятное комплексное инновационное решение для образования
          со встроенным конструктором методологии продуктов и запусков, с
          тренажером по выработки навыков в Метавселенной и с возможностью
          работы в любых валютах из любой точки Земли
        </span>
        <div className="header__butBlock">
          <Link to={startLink} className="menu__topButton">
            Начать пользоваться
          </Link>
          <span className="header__button_text">Стать инвестором</span>
        </div>
      </header>
    </>
  );
}