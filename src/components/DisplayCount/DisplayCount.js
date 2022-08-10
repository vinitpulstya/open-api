import { Typography } from "@mui/material";

const DisplayCount = ({ text, count }) => {
  return (
    <Typography variant="overline" display="block" marginLeft={"2rem"}>
      {text}:{" "}
      <Typography
        variant="button"
        display="inline"
        gutterBottom
        color="primary"
      >
        {count}
      </Typography>
    </Typography>
  );
};

export default DisplayCount;
