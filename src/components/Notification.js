import React from 'react'
import styles from '../styles/Notification.module.css';
const Notification = () => {
  return (
    <div className={styles["notification-block"]}>
        <div>
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport_icon&w=32&q=75" alt=""></img>
            <p>
                Limited Time Offer: Get 15% off on all Cogo Assured Rates. 
                <a href="#"> Book Today!</a>
            </p>
        </div>
        <img src="https://img.icons8.com/?size=512&id=IyF52aJ6ROno&format=png"></img>
    </div>
  );
};

export default Notification;
