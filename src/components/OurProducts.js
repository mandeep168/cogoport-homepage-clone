import React from 'react'
import ProductsCard from './ProductsCard';
import styles from './OurProducts.module.css';
import {products} from './../data/our-products';

const OurProducts = () => {
  return (
    <div className={styles['main-container']}>
        <h3> Our Products </h3>
        <div className={styles['our-products-list-container']}>
            {
                products.map((productList) => {
                    return (
                        <div className={styles['our-products-list']}>
                            <h4 class={styles['product-heading']}>{productList.heading || "Heading Missing" }</h4>
                            <div>
                            {
                                productList.products.map((prod) => {
                                    return (<ProductsCard prodHeading = {prod.prodHeading} />);
                                })
                            }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default OurProducts;
