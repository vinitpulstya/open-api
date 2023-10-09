import { useContext, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import "./random.scss";
import { Button, CircularProgress } from "@mui/material";
import AppStateContext from "../../services/app-state-context";
import LazyAPIs from "../../components/LazyAPIs/LazyAPIs";

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
      <LazyAPIs entries={random} />
    </div>
  );
};

export default Random;
