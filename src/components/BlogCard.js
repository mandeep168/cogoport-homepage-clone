import React from 'react'
import styles from '../styles/BlogCard.module.css';

const BlogCard = (props) => {;
  return (
    <div className={styles['blog-post-card']}>
        <a>
            <img src={props.imgURL}></img>
            <div>
              <h4 className={styles['red-text']}>Industry Basics</h4>
              <h4>{props.title}</h4>
              <p>{props.description}</p>
              <div className={styles['footer']}>
                  <span>Read More </span>
                  <p>{props.date}</p>
              </div>
            </div>
        </a>
    </div>
  )
}

export default BlogCard;
