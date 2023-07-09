import React from 'react'
import { blogs } from '../data/blogs.js';
import BlogCard from './BlogCard.js';
import ButtonRed from './ButtonRed.js';
import styles from '../styles/Blogs.module.css';

const Blogs = () => {
  return (
    <div className={styles.container}>
        <h3> Blogs </h3>
        <div style={styles}>
          {
              blogs.map((blogEntry) => {
                  return <BlogCard imgURL={blogEntry.imgURL} title={blogEntry.title} description={blogEntry.description} date={blogEntry.date}/>
              })
          }
        </div>
        <ButtonRed className={styles.btn} btnText={"View More"}/>
    </div>
  )
}

export default Blogs;
