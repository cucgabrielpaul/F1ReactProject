import React, { useState } from "react";
import { mockData } from "../data/mockData";
import BestTeam from "./BestTeam";
import Data from "./Data";

function TableContent() {
  const [drivers, setDrivers] = useState(mockData);

  const increasePoints = (id) => {
    setDrivers(
      drivers.map((element) => {
        return {
          ...element,
          points: element.number === id ? element.points + 5 : element.points,
        };
      })
    );
  };

  const decreasePoints = (id) => {
    setDrivers(
      drivers.map((element) => {
        return {
          ...element,
          points: element.number === id ? element.points - 5 : element.points,
        };
      })
    );
  };

  const getBestTeam = () => {
    let f1Teams = Array.from(new Set(drivers.map((element) => element.team)));
    let rank = [];
  
    f1Teams.forEach((item) => {
      let f1Drivers = drivers.filter((element, index) => element.team === item);
  
      rank.push({
        totalScore: f1Drivers[0].points + f1Drivers[1].points,
        team: item,
        firstDriverImg: f1Drivers[0].image,
        secondDriverImg: f1Drivers[1].image,
        firstDriverName: `${f1Drivers[0].firstName} ${f1Drivers[0].lastName}`,
        secondDriverName: `${f1Drivers[1].firstName} ${f1Drivers[1].lastName}`,
      });
    });
  
    rank.sort(
      (firstItem, secondItem) => secondItem.totalScore - firstItem.totalScore
    );
  
    return rank[0];
  };
  
  console.log(getBestTeam());
  
  (() =>
    drivers.sort(
      (firstItem, secondItem) => secondItem.points - firstItem.points
    ))();

  return (
    <tbody>
      <BestTeam props={getBestTeam()}/>
      
      {drivers.map((element, index) => (
        <Data
          key={element.number}
          no={index + 1}
          pic={element.image}
          name={`${element.firstName} ${element.lastName}`}
          team={element.team}
          country={element.country}
          points={element.points}
          increase={() => increasePoints(element.number)}
          decrease={() => decreasePoints(element.number)}
        />
      ))}
    </tbody>
  );
}

export default TableContent;
