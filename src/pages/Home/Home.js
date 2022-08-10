import { Grid, Link, Typography } from "@mui/material";
import ImageCard from "../../components/ImageCard/ImageCard";
import "./home.scss";
import { home_page } from "../../static/config/content";

const Home = () => {
  return (
    <div className="home">
      {greet}
      {grid}
    </div>
  );
};

const greet = (
  <div className="home__greet">
    <Typography variant="h4" component="h1" gutterBottom>
      Welcome to OPEN API!
    </Typography>
    <Typography variant="h6" component="h2" gutterBottom>
      Find free public api's for your project thanks to the{" "}
      <Link
        href="https://github.com/public-apis-dev/public-apis"
        underline="hover"
        target="_blank"
      >
        'public-apis'
      </Link>{" "}
      project.
    </Typography>
  </div>
);

const grid = (
//   <div className="home__grid">
    <Grid container justifyContent="space-evenly" style={{marginTop: '3rem'}} className="home__grid">
      {home_page.cards.map((card) => (
        <ImageCard key={card.title}
          img={card.img}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </Grid>
//   </div>
);

export default Home;
