import React from "react";

export default function ItemCard(props){
    return(
        <div className="Card">
            <h3>{props.item.name}</h3>
            <img src={props.item.img}></img>
            <p>{props.item.desc}</p>
        </div>
    )
}