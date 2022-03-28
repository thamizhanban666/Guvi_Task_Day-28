import React from 'react'
import Row_tables from './Row_tables'

function Tables() {
    const tableData = [
        {
            name: "Thamizhanban",
            position: "Full Stack Developer",
            office: "Chennai",
            age: 23,
            startData: "05/01/2022",
            salary:"$433,000" 
        },
        {
            name: "Sam",
            position: "Javascript Developer",
            office: "London",
            age: 27,
            startData: "04/25/2011",
            salary:"$120,000" 
        },
        {
            name: "John",
            position: "Python Developer",
            office: "Singapore",
            age: 25,
            startData: "08/12/2012",
            salary:"$281,000" 
        },
        {
            name: "Ashok",
            position: "Java Developer",
            office: "Bangalore",
            age: 29,
            startData: "01/30/2018",
            salary:"$400,000" 
        },
        {
            name: "Elon",
            position: "Director",
            office: "New York",
            age: 40,
            startData: "12/25/2010",
            salary:"$10,000,000" 
        }
    ]
  return (
   <>
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                tableData.map((obj) => {
                                    return <Row_tables data={obj}/>
                                })     
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
  )
}

export default Tables