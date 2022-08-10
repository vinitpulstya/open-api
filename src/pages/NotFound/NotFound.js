import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <div style={{ marginTop: "10rem", textAlign: "center" }}>
      <Typography variant="h2" component="h1" gutterBottom color={'#ff5370'}>
        404.
      </Typography>
      <Typography variant="h4" component="h2" color={'#f07178'}>
        Page not found.
      </Typography>
    </div>
  );
};

export default NotFound;
