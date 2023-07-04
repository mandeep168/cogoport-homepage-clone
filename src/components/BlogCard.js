import React from 'react'
import styles from './BlogCard.module.css';

const BlogCard = () => {;
  return (
    <div className={styles['blog-post-card']}>
        <a>
            <img href="https://www.cogoport.com/_next/image?url=https%3A%…vault%2Foriginal%2FEng_2405_Banner.png&w=828&q=75"></img>
            <h5>Industry Basics</h5>
            <h4>Understanding Lean Supply Chain Management: Definition and Considerations</h4>
            <p>Lean Supply Chain Management represents the extension of Lean Thinking across the entire supply chain. So, what are the benefits and key components? Read on!</p>
            <div>
                <p>Read More </p>
                <p>24 June 2023</p>
            </div>
        </a>
    </div>
  )
}

export default BlogCard;
