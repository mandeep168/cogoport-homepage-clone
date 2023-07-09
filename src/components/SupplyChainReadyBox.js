import React from 'react'
import ButtonRed from './ButtonRed';
import styles from '../styles/SupplyChainReadyBox.module.css';

const SupplyChainReadyBox = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textDiv}>
        <h3>Ready to take your Supply Chain to the Next Level ?</h3>
        <ButtonRed />
      </div>
    </div>
  )

}


export default SupplyChainReadyBox;
