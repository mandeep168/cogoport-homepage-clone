import React from 'react'
import styles from '../styles/IndustriesServed.module.css';

const IndustriesServed = () => {
  return (
    <div className={styles['box-container']}>
        <div>
        <h3> Industries Served </h3>
        <div className={styles.container}>
            <div className={styles['container-item']}>
                <img src="https://www.cogoport.com/images/chemical.svg"></img>
                <span>Chemicals</span>
            </div>
            <div className={styles['container-item']}>
                <img src="https://www.cogoport.com/images/paracetamol.svg"></img>
                <span>Pharmaceuticals</span>
            </div>
            <div className={styles['container-item']}>
                <img src="https://www.cogoport.com/images/electronics.svg" alt="electronics"></img>
                <span>Electronics</span>
            </div>
            <div className={styles['container-item']}>
                <img src="https://www.cogoport.com/images/whitegoods.svg" alt="whitegoods"></img>
                <span>Whits Goods</span>
            </div>
            <div className={styles['container-item']}>
                <img src="https://www.cogoport.com/images/textiles.svg" alt="textiles"></img>
                <span>Textiles</span>
            </div>
            <div className={styles['container-item']}>
                <img src="https://www.cogoport.com/images/manufactoring.svg" alt="manufactoring"></img>
                <span>Manufacturing</span>
            </div>
            <div className={styles['container-item']}>
                <img src="https://www.cogoport.com/images/agriculture.svg" alt="agriculture"></img>
                <span>Agriculture</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default IndustriesServed;
