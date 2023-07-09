import React from 'react'
import styles from '../styles/ProductsCard.module.css';

const ProductsCard = (props) => {;
  return (
    <a href="#" className={styles["product-card"]}>
        <div>
            {props.svg || <div></div>}
            <h4>{props.prodHeading || "heading here"}</h4>
            <p> Find Out More - </p>
       </div>
    </a>
  )
}


export default ProductsCard;
