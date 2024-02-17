import React from "react";

export default function Transaction(props) {
    return(
        <tr className="tr-table-element">
            <td>{props.finInstrument}</td>
            <td>{props.value}</td>
            <td>{props.date}</td>
        </tr>
    )
}