import React from "react";
import Transaction from "./Transaction";

export default function Transactions(props) {
    return(
        <div id="transaction-box">
            <div>
                <h2 style={{marginTop:0, textAlign:"center"}}>Transactions</h2>
            </div>
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Financial Instrument</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {props.transactions.map(transaction => 
                    <Transaction 
                        finInstrument={transaction.finInstrument}
                        value={`₴${transaction.value.toLocaleString().replace(/,/g, ' ')}`} 
                        date={transaction.date}
                    />)}
                </tbody>
            </table>
            
        </div>
    )
}