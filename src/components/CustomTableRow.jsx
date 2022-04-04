import ReactCountryFlag from "react-country-flag"
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

function CustomTableRow(props) {
  const { no, pic, name, team, country, points, increase, decrease } = props;

  return (
    <TableRow>
      <TableCell align="center">{no}</TableCell>
      <TableCell align="center">
        <ReactCountryFlag
          countryCode={country}
          style={{
            width: "65px ",
            height: "50px ",
          }}
          svg
        ></ReactCountryFlag>
      </TableCell>
      <TableCell align="center">
        <img src={pic} alt={name} height={"80"} width={"80"} />
      </TableCell>

      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{team}</TableCell>
      <TableCell align="center">{country}</TableCell>
      <TableCell align="center">{points}</TableCell>
      <TableCell align="center">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            sx={{
              height: "25px",
              width: "100px",
              mb: "5px",
            }}
            onClick={increase}
          >
            ▲ +5P
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{
              height: "25px",
              width: "100px",
              mt: "5px",
            }}
            onClick={decrease}
          >
            ▼ -5P
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}
export default CustomTableRow;
