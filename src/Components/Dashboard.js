import React from 'react'
import Card_dashboard from './Card_dashboard'
function Dashboard(props) {
    const dashboardData = [
        {
            contentHead: "Earnings (Monthly)",
            content: "$40,000",
            borderLeft: "primary",
            icon: "fa-calendar"
        },
        {
            contentHead: "Earnings (Annual)",
            content: "$215,000",
            borderLeft: "success",
            icon: "fa-dollar-sign"
        },
        {
            contentHead: "Tasks",
            content: {progressBar:true, width:"50%"},
            borderLeft: "info",
            icon: "fa-clipboard-list"
        },
        {
            contentHead: "Pending Requests",
            content: "18",
            borderLeft: "warning",
            icon: "fa-comments"
        },
    ]
 
    return (
    
    <>

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">

            {
                dashboardData.map((obj) => {
                    return <Card_dashboard data={obj}/>   
                })
            }

        </div>

    </>

  )
}

export default Dashboard