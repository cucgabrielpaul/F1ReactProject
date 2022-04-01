import React from "react";
import TableFooter from "@mui/material/TableFooter";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function CustomTableFooter(props) {
  return (
    <TableFooter>
      <TableRow>
        <TableCell align="left" colSpan="9">
          Last update :{props.date}
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
export default CustomTableFooter;
