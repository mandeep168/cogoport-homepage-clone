import React from 'react'
import whatsappIcon from '../assets/whatsapp.png';

const WhatsappCard = () => {
  return (
    <div style={{display: "block"}}>
      <a href="#" style={anchorStyles}>
        <div style={divStyles}>
            <img src={whatsappIcon} alt="whatsapp" style={imgStyles}></img>
            <span style={spanStyles}> Whatsapp Us </span>
        </div>
      </a>
    </div>
  )
}

const imgStyles = {
    width: "32px",
    height: "32px",
}
const spanStyles = {
    fontSize: "13px",
    fontWeight: "700",
    color: "#fff",
    fontFamily: "PT Sans,sans-serif",
}
const anchorStyles = {
    textDecoration: "none",
}
const divStyles = {
    position: "fixed",
    top: "20%",
    right: "0",
    backgroundColor: "#ee3425",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "76px",
    height: "54px",
    padding: "7px",
    borderRadius: "4px 0 0 4px",
}


export default WhatsappCard;
