import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./basicCard.scss";

export default function BasicCard({ title, clickHandler }) {
  return (
    <Card sx={{ width: 275, marginBottom: "3rem" }} className="basicCard">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={ () => clickHandler(title)}>
          Browse Category
        </Button>
      </CardActions>
    </Card>
  );
}
