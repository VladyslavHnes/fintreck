import React, { useState, useEffect} from "react";
import Transactions from "./transactions/Transactions";
import SumBlock from "./SumBlock";
import jsonData from "./data.json"

export default function DashboardBody() {
    let [data, setData] = useState(jsonData);
    let [sums, setSums] = useState(() => getSums())
    

    function getSums() {
        let payedSum = data.transactions.map(tr => tr.value).reduce((partialSum, num) => partialSum + num, 0);
        let leftSum = data.totalSum - payedSum;
        let percentage = (payedSum / data.totalSum) * 100;
        percentage = percentage.toFixed(2)
        let sums = {}
        sums.payedSum = payedSum
        sums.leftSum = leftSum
        sums.percentage = percentage
        return sums;
    }

    useEffect(() => {
        console.log("Recalculating")
        let newSums = getSums();
        setSums(newSums);
    }, [data])

    function addTransaction(transaction) {
        console.log("Updating data")
        setData(prevData => {
            return {
                ...prevData,
                transactions: [...prevData.transactions, transaction]
            };
        })
    }

    return (
        <div className="main-dashboard">
            <SumBlock text="Total sum" imgPath="./icons/total-sum.png" sum={data.totalSum} />
            <SumBlock text="Payed sum" imgPath="./icons/payed.png" sum={sums.payedSum} />
            <SumBlock text="Sum left total" imgPath="./icons/sum-left.png" sum={sums.leftSum} />
            <SumBlock text="Sum left per month" imgPath="./icons/total-sum.png" sum={sums.leftSum / data.monthNumber} />
            <div className="dashboard-total">
                <img src="./icons/month.png" />
                <div className="dashboard-total-text">
                    <p className="dashboard-total-title">Number of months</p>
                    <p className="dashboard-total-sum">{data.monthNumber}</p>
                </div>
            </div>
            <div id="dashboard-percentage-chart">
                <p style={{fontSize: "1.5rem"}}>Progress</p>
                <svg viewBox="0 0 36 36" className="circular-chart"><path className="circle" id="chartPath" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" style={{strokeDasharray: `${sums.percentage}, 100`}}></path><text x="50%" y="50%" textAnchor="middle" dy=".3em" className="percentage-text" id="percentageText">{sums.percentage}%</text></svg>
            </div>
            <Transactions transactions={data.transactions} addTransaction={addTransaction}/>
        </div>
    )
}