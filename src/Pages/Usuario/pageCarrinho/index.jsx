import React from "react";
import "./style.css"
import Header from "../../../Components/Header";
import Img12 from "../../../images/079fb574-e319-493d-a49f-e8fed3994201.png"
import Img13 from "../../../images/remover.svg"

function pageCarrinho() {

  return (
    <>
    <Header/> 

    <div className="container">
      <p className="bradcump">
        <span className="bradcump-inactive">Inicio /</span
        ><span className="bradcump-active"> Carrinho</span>
      </p>
      <h1 className="title">Meu carrinho</h1>

      <div className="table-container animeLeft">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Produto</th>
              <th>Total</th>
              <th>Remover</th>
              <th>Finalizar</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <img
                  src={Img12}
                  alt=""
                />
              </td>
              <td>iPhone XV Pro Max</td>
              <td>19.654.454,00 AKZ</td>
              <td>
                <button className="button-remove">
                  <img src={Img13} alt="" />
                </button>
              </td>
              <td>
                <button className="button-buy">Comprar</button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={Img12}
                  alt=""
                />
              </td>
              <td>iPhone XV Pro Max</td>
              <td>19.654.454,00 AKZ</td>
              <td>
                <button className="button-remove">
                  <img src={Img13} alt="" />
                </button>
              </td>
              <td>
                <button className="button-buy">Comprar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="cart-page-bottom animeLeft">
        <article className="cupom-container">
          <h1 className="subtitle">Código de cupom</h1>

          <form>
            <div className="cupom-input-container">
              <label for="cupom" className="cupom-label"
                >Digite o seu código de cupom, caso tiver um</label
              >
              <input type="text" className="cupom-input" id="cupom" name="cupom" />
            </div>
            <button className="submit-buttom" /*style="align-self: flex-start"*/>
              Aplicar cupom
            </button>
          </form>
        </article>
        <article className="total-container">
          <h1 className="subtitle">TOTAIS DO CARRINHO</h1>
          <div className="separator"></div>

          <section className="total-content">
            <div className="total-option">
              <span>Subtotal</span>
              <strong>456.436.666,09 AKZ</strong>
            </div>

            <div className="total-option">
              <span>Total</span>
              <strong>456.436.666,09 AKZ</strong>
            </div>

            <button
              className="submit-buttom"
             // style={"align-self: flex-start; margin-top: 12px"}
            >
              Prosseguir para o checkout
            </button>
          </section>
        </article>
      </section>
    </div>
    </>
  ); 
}

export default pageCarrinho;
