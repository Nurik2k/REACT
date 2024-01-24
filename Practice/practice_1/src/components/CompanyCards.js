import React from "react";

export default function CompanyCards(props){
    return(
        <div>
            <h3>{props.company.name}</h3>
            <p>{props.company.type}</p>
            <p>{props.company.quantity}</p>
            <p>{props.company.distance}</p>
            <p>{props.company.reliability}</p>
            <br></br>
        </div>
    )
}