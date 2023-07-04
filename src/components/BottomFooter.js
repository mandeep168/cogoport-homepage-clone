import React from 'react'
import styles from './BottomFooter.module.css';
const BottomFooter = () => {
  return (
    <div className={styles['footer-container']}>
      <div>
        <p> &#169; 2023 Cogo Universe PTE. All rights reserved. </p>
        <p className={styles['middle-section']}> 
            <a> Terms and Conditions </a> |
            <a> Cookie policy </a> | 
            <a> Privacy and Data Protection Policy </a>
        </p>
      </div>
      <div> <p>English (IN)</p> </div>
    </div>
  )
}

export default BottomFooter;
