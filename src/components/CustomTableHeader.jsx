import React from "react";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

function CustomTableHeader(props) {
  let { no, flag, pic, driver, team, country, points, increase } = props;
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="center">{no}</StyledTableCell>
        <StyledTableCell align="center">{flag}</StyledTableCell>
        <StyledTableCell align="center">{pic}</StyledTableCell>
        <StyledTableCell align="left">{driver}</StyledTableCell>
        <StyledTableCell align="left">{team}</StyledTableCell>
        <StyledTableCell align="center">{country}</StyledTableCell>
        <StyledTableCell align="center">{points}</StyledTableCell>
        <StyledTableCell align="center">{increase}</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}
export default CustomTableHeader;
