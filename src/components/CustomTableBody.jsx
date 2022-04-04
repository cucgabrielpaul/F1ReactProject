import React, { useState } from "react";
import { mockData } from "../data/mockData";
import CustomCard from "./CustomCard";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import CustomTableHeader from "./CustomTableHeader";
import CustomTableFooter from "./CustomTableFooter";
import Paper from "@mui/material/Paper";
import CustomTableRow from "./CustomTableRow";

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

  const updateDate = () => {
    let today = new Date();
    let day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    let month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    let hour = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
    let min = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    let second = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
    let date = `${day}/${month}/${today.getFullYear()}`;
    let time = `${hour}:${min}:${second}`;
    let fullTime = `${date} ${time}`;

    return fullTime;
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

    rank.sort((firstItem, secondItem) => secondItem.totalScore - firstItem.totalScore);

    return rank[0];
  };

  (() => drivers.sort((firstItem, secondItem) => secondItem.points - firstItem.points))();

  return (
    <TableContainer
      component={Paper}
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "0 auto",
        width: "90%",
        backgroundColor: "#fff5",
      }}
    >
      <CustomCard props={getBestTeam()} />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <CustomTableHeader
          no="No."
          flag="Flag"
          pic="Image"
          driver="Driver"
          team="Team"
          country="Country"
          points="Points"
          increase="Increase"
          decrease="Decrease"
        />

        <TableBody>
          {drivers.map((element, index) => (
            <CustomTableRow
              key={element.number}
              no={index + 1}
              pic={element.image}
              name={`${element.firstName} ${element.lastName}`}
              team={element.team}
              country={element.country}
              points={element.points}
              increase={() => {
                updateDate();
                increasePoints(element.number);
              }}
              decrease={() => {
                updateDate();
                decreasePoints(element.number);
              }}
            />
          ))}
        </TableBody>

        <CustomTableFooter date={updateDate()} />
      </Table>
    </TableContainer>
  );
}

export default TableContent;
