import React from 'react'
import ButtonRed from './ButtonRed';
import styles from '../styles/GetStarted.module.css';

const GetStarted = () => {
  return (

    <div>
        <div className={styles['top-container']}>
            <div className={styles['top-container-text']}>
                <h2> Get Started Today </h2>
                <span> Plan, Book and Finance your shipment in one place. </span>
                <span> Experience how Cogoport’s Global Trade Platform can Turbocharge your Business. </span>
                <ButtonRed btnText="Get Started" />
            </div>
            <div className={styles['top-container-image']}>
                <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&w=640&q=75" alt="">
                </img>
            </div>
        </div>

        <div className={styles['middle-container']}>

          <div className={styles['middle-container-play-button']}>
            <img src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/play-button-white.png" alt="playBtn"></img>
          </div>
          <img className={styles['middle-container-background-img']} src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepage-video.png&w=3840&q=75" alt="about-us-section"></img>

          {/* <div class={styles['utube-video-container']}>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/iPATxlVp5gU" title="Cogoport New Branding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div> */}
          
        </div>

        <div className={styles['bottom-container']}>
            <div>
              <div>
                <h3> Grow Faster with Cogoport </h3>
                <p>
                  Know more about Cogoport's Global Trade Platform
                  <sup> TM </sup>
                </p>
              </div>
              <a href="#" className={styles['know-more-anchor']}>
                <div>
                  <span>Know More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="black" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>              
                </div>
              </a>
            </div>
        </div>
    </div>
  )
}

export default GetStarted;
