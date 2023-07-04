import React from 'react'
import styles from './NavBarTab.module.css';
const NavBarTab = () => {;
  return (
    <div>
    <span> Partners </span>
    <div className={styles.dropdown}> 
        <div>
            <a>
                <div></div>
                <span>Global Partner Network</span>
            </a>
        </div>
        <div className={styles.container}>
            <div>
                <h4>Our Logistics Provider</h4>
                <div>
                    <a>
                        <div></div>
                        <span>Frieght Forwarders</span>
                    </a>
                    <a>
                        <div></div>
                        <span>Transporters</span>
                    </a>
                    <a>
                        <div></div>
                        <span>Custom Agents</span>
                    </a>
                </div>
            </div>
            <div>
                <h4>Partnership Programs</h4>
                <div>
                    <a>
                        <div></div>
                        <span>Channel Partners</span>
                    </a>
                    <a>
                        <div></div>
                        <span>Oversea Agents</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NavBarTab;
