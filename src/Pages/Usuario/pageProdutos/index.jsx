import React from "react";
import './style.css'
import Header from "../../../Components/Header";
import data, {categories} from './data'
import Img8 from '../../../images/favorite-border.svg'

function pageProdutos(){
    
    return(
        <>
        <Header/> 
        <div className="container animeLeft">
        {
            categories.map((item, index)=>(
                <>
                <h3 key={index} id="desc-categoria"> {item.describe} </h3>
                <section className="products-container">
        {data.map((item, index)=>(
            <article className="product" key={index}>
             <div className="product-card" key={index}>
              <img
                src={item.Img}
                alt=""
             />
            <button className="favorite-button">
              <img src={Img8} alt="img" />
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
                </>
            ))
        }
        
      </div>
        </>
    )

}
export default pageProdutos;