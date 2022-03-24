import React from 'react'

function TableFooter(props) {
  
  return (
    <tfoot>
      <tr>
        <td colSpan="9">Last update : {props.date}</td>
      </tr>
    </tfoot>
  )
}
export default TableFooter;