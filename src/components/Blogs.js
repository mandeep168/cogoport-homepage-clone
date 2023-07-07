import React from 'react'
import { blogs } from '../data/blogs.js';
import BlogCard from './BlogCard.js';
import ButtonRed from './ButtonRed.js';

const Blogs = () => {
  const styles = {
    display: "flex",
  }
  return (
    <div>
        <h3> Blogs </h3>
        <div style={styles}>
          {
              blogs.map((blogEntry) => {
                  return <BlogCard imgURL={blogEntry.imgURL} title={blogEntry.title} description={blogEntry.description} date={blogEntry.date}/>
              })
          }
        </div>
        <ButtonRed btnText={"View More"}/>
    </div>
  )
}

export default Blogs;
