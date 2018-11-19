import React from "react";
import "./Picture.css"

const styles = {
    card:{
        width: "16rem",
        height: "9rem",
        display: "inline-block",
        marginLeft: "10px",
        marginTop: "20px",
        marginBottom: "10px"
    }
}


const Picture = props =>(
    
        <div className="card" style={styles.card}>
            <img onClick={()=>props.update_check(props.id)} className="card-img-top" src={props.image} alt="acar"/>
        </div>

)        
    


export default Picture