import React from "react";
import TableFooter from "@mui/material/TableFooter";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function TabFooter(props) {
  return (
    <TableFooter>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="right" colSpan="9">
          Last update :{props.date}
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
export default TabFooter;
