import React from "react";
import './style.css'
import { Link } from "react-router-dom/cjs/react-router-dom";
import Img1 from '../../images/seta-baixo-12.svg'
import Img2 from '../../images/categoria.svg'
import Img3 from '../../images/suporte.svg'
import Img4 from '../../images/lupa.svg'
import Img5 from '../../images/carrinho.svg'
import Img6 from '../../images/conta.svg'

function Header() {
  return (
    <>
    <header className="header">
      <Link to="/" className="logo">Logo</Link>
      <nav className="nav-menu">
        <ul className="menu">
          <li>
            <Link to="#"
              ><span>
                Categorias
                <img src={Img1} alt="img" />
              </span>
              <img src={Img2} className="hidden" alt="img" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <span> Suporte </span>
              <img src={Img3} className="hidden" alt="img" />
            </Link>
          </li>
        </ul>
      </nav>
      <label className="input-container">
        <input type="search" className="input" placeholder="Procurar produto" />
        <span>
          <img src={Img4} alt="img" />
        </span>
      </label>

      <nav className="nav-menu">
        <ul className="menu">
          <li>
            <Link to="./pageConta">
              <img src={Img6} alt="img" />
              <span>Conta</span>
            </Link>
          </li>
          <li>
            <Link to="./pageCarrinho">
              <div className="carrinho-icon">
                <img src={Img5} alt="img" />
                <div className="carrinho-icon-number">2</div>
              </div>
              <span>Carrinho</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  ); 
}

export default Header;
