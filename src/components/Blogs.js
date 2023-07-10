import React from 'react'
import { blogs } from '../data/blogs.js';
import BlogCard from './BlogCard.js';
import ButtonRed from './ButtonRed.js';
import styles from '../styles/Blogs.module.css';

const Blogs = () => {
  return (
    <div className={styles.container}>
        <h3> Blogs </h3>
        <div className={styles.blogs}>
          {
              blogs.map((blogEntry) => {
                  return <BlogCard imgURL={blogEntry.imgURL} title={blogEntry.title} description={blogEntry.description} date={blogEntry.date}/>
              })
          }
        </div>
        
        <div className={styles["btn"]}>
          <a href="#" className={styles['anchor']}>
            <div>
              View All
            </div>
          </a>
        </div>
    </div>
  )
}

export default Blogs;
