import React, { useState, useEffect } from "react";
import Transaction from "./Transaction";
import TransactionForm from "./TransactionForm";
import ReactModal from "react-modal"
import { nanoid } from 'nanoid'

export default function Transactions(props) {
    useEffect(() => {
        ReactModal.setAppElement('body');
    }, [])
    let [isOpen, setOpen] = useState(false);

    function handleOpenModal() {
        setOpen(true)
    }

    function handleCloseModal() {
        setOpen(false)
    }


    return(
        <div id="transaction-box">
            <div style={{"display": "flex"}}>
                <h2 style={{margin:0, alignSelf:"center"}}>Transactions</h2>
                <button onClick={handleOpenModal} style={
                    {
                        backgroundColor: "#1D1D41",
                        border: "none",
                        marginLeft: "auto"
                    }    
                }>
                    <img src="./icons/plus.png" style={{height: "30px",}}/>
                </button>
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
                {props.transactions.map(transaction => {
                        return (<Transaction
                            key = {nanoid()}
                            finInstrument={transaction.finInstrument}
                            value={`₴${transaction.value.toLocaleString().replace(/,/g, ' ')}`} 
                            date={transaction.date}
                        />)
                    }
                )}
                </tbody>
            </table>
            <ReactModal 
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                className="modal"
                overlayClassName="overlay"
            >
                <TransactionForm closeModal={handleCloseModal} addTransaction={props.addTransaction}/>
            </ReactModal>
            
        </div>
    )
}