import React from 'react'
import styles from '../styles/ButtonRed.module.css'
const ButtonRed = ({width, btnText}) => {
    const anchorStyles = {
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "red",
        display: "inline-block",
        padding: "8px 42px",
        borderRadius: "8px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 700,
        textDecoration:"none",
        margin: "5px",
    }

  return (
    <div>
      <a href="#" style={anchorStyles}>{ btnText || "GetStarted" }</a>
    </div>
  )
}



export default ButtonRed;
