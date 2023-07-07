import React from 'react'
import styles from '../styles/SubscribeNewsletterAndQuickLinks.module.css';
import { 
    products,
    supply,
    partners,
    tools,
    company,
    knowledgeCenter
} from '../data/quick-links.js';

const SubscribeNewsletterAndQuickLinks = () => {
    console.log(partners);
  return (
    <div className={styles["container"]}>
        <div className={styles["top-container"]}>
            <div className={styles["top-container-top"]}></div>
            <div className={styles["newsletter-image"]}>
                <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport-subscribe.png&w=640&q=75" alt="Subscribe letter image" ></img>
            </div>
            <div className={styles["newsletter-input-container"]}>
                <h3> Subscribe to our newsletter now! </h3>
                <span> Don't miss out on the latest happenings at Cogoport. </span>
                <div className={styles["newsletter-form"]}>
                    <form action="#" method="post">
                        <div>
                            <input type="email" name="email" placeholder="Enter your email here" required></input>
                        </div>
                        <div className={styles["form-submit-btn"]}>
                            <button type="submit"> 
                                Subscribe 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>                  
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

        <div className={styles["bottom-container"]}>
            <div className={styles["quick-links-div"]}>
                <span> Products </span>
                <div>
                {
                    products.map((linksGroup) => {
                       return <div className={styles["links-group-div"]}>
                            
                               { linksGroup.heading !== "" && <h4>{ linksGroup.heading }</h4>}
                            
                            <div>
                                {
                                    linksGroup.links.map((link) => {
                                        return  <span> 
                                                    <a href="#"> {link} </a>
                                                </span>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                </div>
            </div>

            <div className={styles["quick-links-div"]}>
                <span></span>
                <div>
                {
                    supply.map((linksGroup) => {
                       return <div className={styles["links-group-div"]}>
                            <h4>{ linksGroup.heading }</h4>
                            <div>
                                {
                                    linksGroup.links.map((link) => {
                                        return  <span> 
                                                    <a href="#"> {link} </a>
                                                </span>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                </div>
            </div>

            <div className={styles["quick-links-div"]}>
                <span> Partners </span>
                <div>
                {
                    partners.map((linksGroup) => {
                       return <div className={styles["links-group-div"]}>
                            <h4>{ linksGroup.heading }</h4>
                            <div>
                                {
                                    linksGroup.links.map((link) => {
                                        return  <span> 
                                                    <a href="#"> {link} </a>
                                                </span>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                </div>
            </div>

            <div className={styles["quick-links-div"]}>
                <span> Tools </span>
                <div>
                {
                    tools.map((linksGroup) => {
                       return <div className={styles["links-group-div"]}>
                            <h4>{ linksGroup.heading }</h4>
                            <div>
                                {
                                    linksGroup.links.map((link) => {
                                        return  <span> 
                                                    <a href="#"> {link} </a>
                                                </span>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                </div>
            </div>

            <div className={styles["quick-links-div"]}>
                <span> Company </span>
                <div>
                {
                    company.map((linksGroup) => {
                       return <div className={styles["links-group-div"]}>
                            <h4>{ linksGroup.heading }</h4>
                            <div>
                                {
                                    linksGroup.links.map((link) => {
                                        return  <span> 
                                                    <a href="#"> {link} </a>
                                                </span>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                </div>
            </div>

            <div className={styles["quick-links-div"]}>
                <span> Knowledge Center </span>
                <div>
                {
                    knowledgeCenter.map((linksGroup) => {
                       return <div className={styles["links-group-div"]}>
                            <h4>{ linksGroup.heading }</h4>
                            <div>
                                {
                                    linksGroup.links.map((link) => {
                                        return  <span> 
                                                    <a href="#"> {link} </a>
                                                </span>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscribeNewsletterAndQuickLinks;
