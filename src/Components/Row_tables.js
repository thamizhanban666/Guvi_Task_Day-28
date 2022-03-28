import React from 'react'

function Row_tables(props) {
  return (
      <tr>
        <td>{props.data.name}</td>
         <td>{props.data.position}</td>
         <td>{props.data.office}</td>
         <td>{props.data.age}</td>
         <td>{props.data.startData}</td>
         <td>{props.data.salary}</td>
      </tr>
  )
}

export default Row_tables