import React from 'react'
import whatsappIcon from '../assets/whatsapp.png';
import styles from '../styles/WhatsappCard.module.css';

const WhatsappCard = () => {
  return (
    <div className={styles.container}>
      <a href="#">
        <div>
            <img src={whatsappIcon} alt="whatsapp"></img>
            <span> Whatsapp Us </span>
        </div>
      </a>
    </div>
  )
}


export default WhatsappCard;
