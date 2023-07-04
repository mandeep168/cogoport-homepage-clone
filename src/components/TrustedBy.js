import React from 'react'
import {logos} from '../data/trusted-by-logos';
import styles from './TrustedBy.module.css';

const TrustedBy = () => {
  return (
    <div className={styles.container}>
      <h3> Trusted By </h3>
      <div>
        <div className={styles['logo-container']}>
            {
                logos.map((trustee) => {
                    return <img className={styles.logo} src={trustee.imgLink} alt={trustee.altText}></img>
                })
            }
        </div>
      </div>
    
    </div>
  )
}

export default TrustedBy;
