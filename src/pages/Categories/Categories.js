import { CircularProgress, Grid } from "@mui/material";
import { useContext } from "react";
import BasicCard from "../../components/BasicCard/BasicCard";
import DisplayCount from "../../components/DisplayCount/DisplayCount";
import AppStateContext from "../../services/app-state-context";

const Categories = () => {
  const ctx = useContext(AppStateContext);

  // useEffect(() => {
  //   ctx.setCategories();
  // }, [ctx]);

  if (!(ctx.categories && ctx.categories.count)) {
    return <CircularProgress />;
  }

  return (
    <div className="categories">
      <DisplayCount text="Availabe Categories" count={ctx.categories.count} />
      <Grid
        container
        justifyContent="space-evenly"
        style={{ marginTop: "2rem" }}
      >
        {ctx.categories.categories &&
          ctx.categories.categories.map((category) => (
            <BasicCard title={category} key={category} />
          ))}
      </Grid>
    </div>
  );
};

export default Categories;
