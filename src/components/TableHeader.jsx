import React from "react";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

function TableHeader(props) {
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
        <StyledTableCell>{no}</StyledTableCell>
        <StyledTableCell align="right">{flag}</StyledTableCell>
        <StyledTableCell align="right">{pic}</StyledTableCell>
        <StyledTableCell align="right">{driver}</StyledTableCell>
        <StyledTableCell align="right">{team}</StyledTableCell>
        <StyledTableCell align="right">{country}</StyledTableCell>
        <StyledTableCell align="right">{points}</StyledTableCell>
        <StyledTableCell align="right">{increase}</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}
export default TableHeader;
