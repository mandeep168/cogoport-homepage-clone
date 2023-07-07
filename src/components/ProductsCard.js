import React from 'react'
import styles from '../styles/ProductsCard.module.css';

const ProductsCard = (props) => {;
  return (
    <a href="#" className={styles["product-card"]}>
        <div>
            <img src={require("../assets/ship.png")}></img>
            <h4>{props.prodHeading || "heading here"}</h4>
            <p> Find Out More - </p>
       </div>
    </a>
  )
}


export default ProductsCard;
