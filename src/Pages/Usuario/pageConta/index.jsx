import React from "react";
import './style.css'
import Header from "../../../Components/Header";
import Img9 from "../../../images/no-photo.svg"
import Img10 from "../../../images/seta-direita.svg"
import Img11 from "../../../images/logout.svg"

function pageConta() {
  return (
    <>
    <Header/> 

    <div className="container">
      <p className="bradcump">
        <span className="bradcump-inactive"> {"<"} Inicio </span>
      </p>
      <h1 className="title">Minha conta</h1>

      <section className="settings">
        <section className="user-data">
          <img src={Img9} alt="" />
          <strong>Alberto Kitumba</strong>
          <span>alberkitumba@gmail.com</span>
        </section>

        <section className="user-config animeLeft">
          <table className="user-config-optins">
            <tr>
              <td>Nomes, Telefone, E-mail</td>
              <td>
                <button><img src={Img10} alt="" /></button>
              </td>
            </tr>
            <tr>
              <td>Senha e Segurança</td>
              <td>
                <button><img src={Img10} alt="" /></button>
              </td>
            </tr>
            <tr>
              <td>Pagamento e entrega</td>
              <td>
                <button><img src={Img10} alt="" /></button>
              </td>
            </tr>
          </table>
          <table className="user-config-optins">
            <tr>
              <td>Meus pedidos</td>
              <td>
                <button><img src={Img10} alt="" /></button>
              </td>
            </tr>
            <tr>
              <td>Notificações</td>
              <td>
                <button><img src={Img10} alt="" /></button>
              </td>
            </tr>
            <tr>
              <td>Modo escuro</td>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </td>
            </tr>
          </table>
          <table className="user-config-optins">
            <tr>
              <td>Apagar conta</td>
              <td>
                <button><img src={Img10} alt="" /></button>
              </td>
            </tr>
            <tr>
              <td>Finalizar sessão</td>
              <td>
                <button><img src={Img11} alt="" /></button>
              </td>
            </tr>
          </table>
        </section>
      </section>
    </div>
    </>
  ); 
}

export default pageConta;
