import { CircularProgress, Grid } from "@mui/material";
import { useContext } from "react";
import BasicCard from "../../components/BasicCard/BasicCard";
import DisplayCount from "../../components/DisplayCount/DisplayCount";
import AppStateContext from "../../services/app-state-context";
import { useNavigate } from "react-router-dom";
import { URL_ENTRIES } from "../../static/config/urls";

const Categories = () => {
  // const ctx = useContext(AppStateContext);
  const { categories, setSearchOpts } = useContext(AppStateContext);
  let navigate = useNavigate();

  // useEffect(() => {
  //   ctx.setCategories();
  // }, [ctx]);

  if (!(categories && categories.count)) {
    return <CircularProgress />;
  }

  const browseCategory = (category) => {
    setSearchOpts({ category: category});
    navigate(URL_ENTRIES);
  };

  return (
    <div className="categories">
      <DisplayCount text="Availabe Categories" count={categories.count} />
      <Grid
        container
        justifyContent="space-evenly"
        style={{ marginTop: "2rem" }}
      >
        {categories.categories &&
          categories.categories.map((category) => (
            <BasicCard title={category} key={category} clickHandler={browseCategory} />
          ))}
      </Grid>
    </div>
  );
};

export default Categories;
