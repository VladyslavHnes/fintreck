import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";

export default function Dashboard() {
    return(
        <div className="main">
            <DashboardHeader />
            <DashboardBody />
        </div>
    )
}