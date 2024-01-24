import React from "react";
import CompanyCards from "./CompanyCards";

function SelectQuery(props){
    return(
        <>
            {props.companies.map(company=>{
                if(company.reliability.includes(props.reliability)){
                    return(<CompanyCards company={company}></CompanyCards>)
                }
            })}
        </>
    )
}

export default function SearchCompanyQuery(props){
    return(
       <>
        {props.companies.map(company => {
            let companyName = company.name.toLowerCase().includes(props.searchCompany.toLowerCase())
            let companyType = company.type.toLowerCase().includes(props.searchCompany.toLowerCase())
            let companyDistance = company.distance <= props.searchCompany
            if(companyName || companyType || companyDistance){
                return(<CompanyCards company={company}></CompanyCards>)
            }
        })}
        {SelectQuery(props)}
       </>
    )
}