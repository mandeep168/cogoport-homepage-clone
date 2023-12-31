import React from 'react'
import {portsData} from '../data/portsData';
import styles from '../styles/PortsContainer.module.css';
const PortsContainer = () => {
    const length = portsData.length;
  return (
    <div className={styles['footer-container-cover']}>
        <div className={styles['footer-container']}>
            <div>
                {
                    portsData.slice(0, length/3).map((portInfo) => {
                        return <a href="#">{portInfo}</a>
                    })
                }
            </div>
            <div>
                {
                    portsData.slice(length/3, 2*length/3).map((portInfo) => {
                        return <a href="#">{portInfo}</a>
                    })
                }
            </div>
            <div>
                {
                    portsData.slice(2*length/3, length).map((portInfo) => {
                        return <a href="#">{portInfo}</a>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default PortsContainer;
