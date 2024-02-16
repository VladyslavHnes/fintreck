import React, { useState } from "react";
import Transactions from "./Transactions";
import data from "./data.json"

export default function DashboardBody() {
    let [totalSum, setTotalSum] = useState(data.totalSum);
    let [transactions, setTransactions] = useState(data.transactions);
    let payedSum = transactions.reduce((partialSum, num) => partialSum + num, 0);
    let leftSum = totalSum - payedSum;
    let percentage = (payedSum / totalSum) * 100;
    percentage = percentage.toFixed(2)

    return (
        <div className="main-dashboard">
            <div className="dashboard-total">
                <img src="./icons/total-sum.png" />
                <div className="dashboard-total-text">
                    <p className="dashboard-total-title">Total sum</p>
                    <p className="dashboard-total-sum">₴{totalSum.toLocaleString().replace(/,/g, ' ')}</p>
                </div>
            </div>
            <div className="dashboard-total">
                <img src="./icons/payed.png" />
                <div className="dashboard-total-text">
                    <p className="dashboard-total-title">Payed sum</p>
                    <p className="dashboard-total-sum">₴{payedSum.toLocaleString().replace(/,/g, ' ')}</p>
                </div>
            </div>
            <div className="dashboard-total">
                <img src="./icons/sum-left.png" />
                <div className="dashboard-total-text">
                    <p className="dashboard-total-title">Sum left total</p>
                    <p className="dashboard-total-sum">₴{leftSum.toLocaleString().replace(/,/g, ' ')}</p>
                </div>
            </div>
            <div className="dashboard-total">
                <img src="./icons/sum-per-month.png" />
                <div className="dashboard-total-text">
                    <p className="dashboard-total-title">Sum left per month</p>
                    <p className="dashboard-total-sum">₴200</p>
                </div>
            </div>
            <div id="dashboard-percentage-chart">
                <p>Progress</p>
                <svg viewBox="0 0 36 36" className="circular-chart"><path className="circle" id="chartPath" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" style={{strokeDasharray: `${percentage}, 100`}}></path><text x="50%" y="50%" textAnchor="middle" dy=".3em" className="percentage-text" id="percentageText">{percentage}%</text></svg>
            </div>
            <Transactions transactions={transactions}/>
        </div>
    )
}