import React from 'react'
import ButtonRed from './ButtonRed';

const SupplyChainReadyBox = () => {
    const styles = {
        containerStyles : {
            backgroundColor: "#fbdc00",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
        },
        textDivStyles : {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1200px",
            height: "100px",
            padding: "16px",
        }
    }
    

  return (
    <div style={styles.containerStyles}>
      <div style={styles.textDivStyles}>
        <h3 style={{  fontSize: "28px", lineHeight: "1.2", marginBottom: "38px"}}>Ready to take your Supply Chain to the Next Level ?</h3>
        <ButtonRed />
      </div>
    </div>
  )
}

export default SupplyChainReadyBox;
