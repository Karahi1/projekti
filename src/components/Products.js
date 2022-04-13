import React from "react";

export default function Products(props){
    return (
    <div className="productItem">
        <img src={ props.image } />
        <div className="title">{ props.name }</div>
        <div>{ props.category }</div>
        <div>{ props.pricelevel }</div>
    </div>);
}
