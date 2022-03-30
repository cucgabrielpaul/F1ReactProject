import React from "react";

const BestTeam = (props) => {
  const {
    totalScore,
    firstDriverImg,
    firstDriverName,
    secondDriverImg,
    secondDriverName,
    team,
  } = props.props;
  console.log(props.props.firstDriverImg);
  return (
    <tr>
      <td colSpan="3">
        <img src={firstDriverImg} alt="" />
        <h3>First driver : {firstDriverName}</h3>
      </td>
      <td colSpan="2">
        <h1>TEAM </h1>
        {team}
        <h1>SCORE</h1>
        {totalScore}
      </td>
      <td colSpan="3">
        <img src={secondDriverImg} alt="" />
        <h3>Second driver : {secondDriverName}</h3>
      </td>
    </tr>
  );
};

export default BestTeam;
