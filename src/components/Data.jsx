import TinyFlag from "tiny-flag-react";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function Data(props) {
  const flagURL = (code) => `https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${code}.svg`;
  const { key, no, pic, name, team, country, points, increase, decrease } = props;

  return (
    <TableRow key={key} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="right">{no}</TableCell>
      <TableCell align="right">
        <TinyFlag fallbackImageURL={flagURL(country)} />
      </TableCell>
      <TableCell align="right">
        <img
          src={pic}
          alt={name}
          style={{
            height: 70,
            width: 70,
          }}
        />
      </TableCell>

      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{team}</TableCell>
      <TableCell align="right">{country}</TableCell>
      <TableCell align="right">{points}</TableCell>
      <TableCell align="right">
        <Button color="primary" variant="contained" onClick={increase}>
          ▲ +5P
        </Button>
        <Button color="primary" variant="contained" onClick={decrease}>
          ▼ -5P
        </Button>
      </TableCell>
    </TableRow>
  );
}
export default Data;
