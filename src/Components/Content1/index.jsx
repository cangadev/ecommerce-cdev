import React from 'react'
import './style.css'
import data from './data'
import Img8 from '../../images/favorite-border.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function Content1(){

    return(
        <>
         <div className="container animeLeft">
      <h1 className="title">
        <span>Logo.</span> Melhor lugar para comprar produtos que você ama.
      </h1>
      <div className='content-seeMore'>
         <h3 className="subtitle">Produtos em destaques</h3>
         <Link to="/pageproduto">+Productos</Link>
      </div>
      <section className="products-container">
        {data.map((item, index)=>(
            <article className="product" key={index}>
             <div className="product-card" key={index}>
              <img
                src={item.Img}
                alt=""
             />
            <button className="favorite-button">
              <img src={Img8} alt="img" id='heart'/>
            </button>
          </div>
          <div key={index}>
            <h4 className="produt-price" key={index}>{item.price} AKZ</h4>
            <h4 className="produt-name" key={index}>{item.name}</h4>
          </div>
          <button className="add-to-cart-button" key={index}>
            <img key={index} src={item.Imgbtn} alt="" />
            {item.textbtn}
          </button>
        </article>
        ))}
      </section>

      <section className="texts">
        <article className="text1">
          <strong className="text1-title">20K</strong>
          <p className="text1-description">
            No capítulo anterior, discutimos sobre coesão. A ideia é que, se
            estivermos frente a uma classNamee com muitas responsabilidades, devemos
            dividir essas responsabilidades em muitas pequenas classNamees.
          </p>
        </article>
        <article className="text2">
          <strong className="text2-title">$ 8.9 Billion</strong>
          <p className="text2-description">
            No capítulo anterior, discutimos sobre coesão. A ideia é que, se
            estivermos frente a uma classNamee com muitas responsabilidades, devemos
            dividir essas responsabilidades em muitas pequenas classNamees.
          </p>
        </article>
        <article className="text3">
          <strong className="text3-title">450.666</strong>
          <p className="text3-description">
            No capítulo anterior, discutimos sobre coesão. A ideia é que, se
            estivermos frente a uma classNamee com muitas responsabilidades, devemos
            dividir essas responsabilidades em muitas pequenas classNamees.
          </p>
        </article>
      </section>
    </div>
        </>
    )
    
}
export default Content1;