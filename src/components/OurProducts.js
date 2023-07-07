import React from 'react'
import ProductsCard from './ProductsCard';
import styles from '../styles/OurProducts.module.css';
import {products} from './../data/our-products';

const OurProducts = () => {
  return (
    <div className={styles.container}>
        <div className={styles["stats-background"]}>
            <div className={styles.stats}>
                <div>
                    <div>
                        <h2> 180+ </h2>
                        <h4> Countries Served </h4>
                    </div>
                    <div>
                        <h2> 10,000+ </h2>
                        <h4> Ports Pairs Served </h4>
                    </div>
                    <div>
                        <h2> 30,000+ </h2>
                        <h4>  Tons of Air Cargo Moved </h4>
                    </div>
                    <div>
                        <h2> 700,000 </h2>
                        <h4> Countries Moved </h4>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['upper-border']}></div>
        <div>
            <div class={styles['top-container']}>
                <div className={styles['top-container-text']}>
                    <h2> One Stop Solution for Your Supply Chain </h2>
                    <span> Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains. </span>
                </div>
                <div class={styles['product-check-image']}>
                    <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fmap-supply-chain.png&w=640&q=75" alt="ProductCheck"></img>
                </div>
            </div>
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
        </div>
    </div>
  )
}

export default OurProducts;
