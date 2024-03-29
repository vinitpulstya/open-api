import { useContext, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import "./random.scss";
import { Button, CircularProgress } from "@mui/material";
import AppStateContext from "../../services/app-state-context";
import ApiCard from "../../components/ApiCard/ApiCard";

const Random = () => {
  const ctx = useContext(AppStateContext);
  let { random, categories, setRandom } = ctx;

  useEffect(() => {
    setRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!(random && random.count) || !(categories && categories.categories)) {
    if (random.count === 0) {
      return (
        <>
          <Filter />
          <h2>No data found!</h2>
        </>
      );
    }
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="random">
      {/* only show advanced filters */}
      {/* <Filter /> */}
      <Button style={{ left: "45%" }} onClick={() => setRandom()}>
        Find Again
      </Button>
      <div className="random__card">
      {random &&
        random.entries.map(
          ({ API, Auth, Category, Cors, Description, HTTPS, Link }, idx) => (
            <ApiCard
              key={`${Link}${idx}`}
              API={API}
              Auth={Auth}
              Category={Category}
              Cors={Cors}
              Description={Description}
              HTTPS={HTTPS}
              Link={Link}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Random;
