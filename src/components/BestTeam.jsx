import React from "react";

const BestTeam = (props) => {
  
  console.log(props.props.firstDriverImg);
  return (
    <tr>
      <td colSpan="3">
        <img src={props.props.firstDriverImg} alt=""/>
      </td>
      <td colSpan="2">{props.props.totalScore} </td>
      <td colSpan="3">
        <img src={props.props.secondDriverImg} alt=""/>
      </td>
    </tr>
  );
};

export default BestTeam;
