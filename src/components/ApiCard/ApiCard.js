import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const ApiCard = ({ API, Auth, Category, Cors, Description, HTTPS, Link }) => {
  const ICON_FONT_SIZE = "1rem";
  return (
    <Card sx={{ width: 345, marginBottom: "3rem" }}>
      <CardActionArea>
        {/* <CardMedia
          component="iframe"
          height="180"
          src={Link}
          title={API}
          scrolling="no"
          style={{
            pointerEvents: "none",
            overflow: "hidden",
            border: "none",
            outline: "none",
          }}
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {API}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Description}
          </Typography>
        </CardContent>
        <CardContent>
          {/* <Typography gutterBottom variant="overline" component="div"> */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AuthInfo Auth={Auth} />
            <CategoryInfo Category={Category} />
            <CorsInfo Cors={Cors} ICON_FONT_SIZE={ICON_FONT_SIZE} />
            <HttpsInfo HTTPS={HTTPS} ICON_FONT_SIZE={ICON_FONT_SIZE} />
          </div>
          {/* </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" target="_blank" href={Link}>
          Visit
        </Button>
      </CardActions>
    </Card>
  );
};

const AuthInfo = ({ Auth }) => {
  return (
    <Typography variant="overline" gutterBottom component="span">
      Auth {Auth ? Auth : <span style={{color:"green"}}>open</span>}
    </Typography>
  );
};

const CategoryInfo = ({ Category }) => {
  return (
    <Typography variant="overline" gutterBottom component="span">
      Category {Category}
    </Typography>
  );
};

const CorsInfo = ({ Cors, ICON_FONT_SIZE }) => {
  let component = "";
  switch (Cors) {
    case "yes":
      component = (
        <Typography variant="overline" gutterBottom component="span">
          CORS <IconSuccess ICON_FONT_SIZE={ICON_FONT_SIZE} />
        </Typography>
      );
      break;
    case "no":
      component = (
        <Typography variant="overline" gutterBottom component="span">
          CORS <IconFail ICON_FONT_SIZE={ICON_FONT_SIZE} />
        </Typography>
      );
      break;

    default:
      component = (
        <Typography variant="overline" gutterBottom component="span">
          CORS <IconUnknown ICON_FONT_SIZE={ICON_FONT_SIZE} />
        </Typography>
      );
      break;
  }

  return component;
};

const HttpsInfo = ({ HTTPS, ICON_FONT_SIZE }) => {
  let component = "";
  if (HTTPS) {
    component = (
      <Typography variant="overline" gutterBottom component="span">
        HTTPS <IconSuccess ICON_FONT_SIZE={ICON_FONT_SIZE} />
      </Typography>
    );
  } else {
    component = (
      <Typography variant="overline" gutterBottom component="span">
        HTTPS <IconFail ICON_FONT_SIZE={ICON_FONT_SIZE} />
      </Typography>
    );
  }

  return component;
};

const IconSuccess = ({ ICON_FONT_SIZE }) => (
  <CheckIcon style={{fontSize: ICON_FONT_SIZE}} color="success"/>
);

const IconFail = ({ ICON_FONT_SIZE }) => (
  <CloseIcon style={{fontSize: ICON_FONT_SIZE}} color="error" />
);

const IconUnknown = ({ ICON_FONT_SIZE }) => (
  <QuestionMarkIcon style={{fontSize: ICON_FONT_SIZE}} color="warning" />
);

export default ApiCard;
