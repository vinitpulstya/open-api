import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ImageCard({ img, title, description, link }) {
  let navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 345, minWidth: 345, marginBottom: "3rem" }}
      onClick={() => {
        navigate(link);
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
