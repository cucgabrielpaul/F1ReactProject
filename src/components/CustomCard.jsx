import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CustomCard = (props) => {
  const { totalScore, firstDriverImg, firstDriverName, secondDriverImg, secondDriverName, team } = props.props;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#fff5",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image={firstDriverImg}
          alt={firstDriverName}
          sx={{
            height: "300px",
            width: "300px",
          }}
        />
        <Typography component="h6">First driver</Typography>
        <Typography
          component="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          {firstDriverName}
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="h6">TEAM</Typography>
        <Typography
          component="h6"
          sx={{
            mb: "20px",
            fontWeight: "bold",
          }}
        >
          {team}
        </Typography>
        <Typography
          component="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          TOTAL SCORE : {totalScore}
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          className="makeItOpaque"
          component="img"
          image={secondDriverImg}
          alt={secondDriverName}
          sx={{
            height: "300px",
            width: "300px",
          }}
        />
        <Typography component="h6">Second driver</Typography>
        <Typography
          component="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          {secondDriverName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
