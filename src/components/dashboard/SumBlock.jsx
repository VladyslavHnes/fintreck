import React from "react";

export default function SumBlock(props) {
    console.log("Rendering sum block")
    return (
        <div className="dashboard-total">
            <img src={props.imgPath} />
            <div className="dashboard-total-text">
                <p className="dashboard-total-title">{props.text}</p>
                <p className="dashboard-total-sum">₴{props.sum.toLocaleString().replace(/,/g, ' ')}</p>
            </div>
        </div>
    )
}