import React from "react";
import Transaction from "./Transaction";

export default function Transactions(props) {
    return(
        <div id="transaction-box">
            <div id="transaction-box-header">
                <h2 style={{marginTop:0}}>Transactions</h2>
            </div>
            <ol className="transaction-list">
                {props.transactions.map(transaction => <Transaction value={`₴${transaction.toLocaleString().replace(/,/g, ' ')}`} />)}
            </ol>
        </div>
    )
}