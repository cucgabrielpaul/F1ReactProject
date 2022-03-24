import React from 'react'

function TableHeader(props ){
  let {no,flag,pic,driver,team,country,points,increase,decrease}=props;
  
  return (
      <thead>
        <tr>
          <th>{no}</th>
          <th>{flag}</th>
          <th>{pic}</th>
          <th>{driver}</th>
          <th>{team}</th>
          <th>{country}</th>
          <th>{points}</th>
          <th>{increase}</th>
          <th>{decrease}</th>
        </tr>
      </thead>  
  )
}
export default TableHeader;