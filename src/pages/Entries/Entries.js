import { useContext, useEffect } from "react";
import DisplayCount from "../../components/DisplayCount/DisplayCount";
import AppStateContext from "../../services/app-state-context";
import "./entries.scss";

import LazyAPIs from "../../components/LazyAPIs/LazyAPIs";
import { CircularProgress } from "@mui/material";
import Filter from "../../components/Filter/Filter";

const Entries = () => {
  const ctx = useContext(AppStateContext);
  let { entries, setEntries, searchOpts, categories, setCategories } = ctx;

  useEffect(() => {
    setEntries(searchOpts);
  }, [searchOpts]);

  useEffect(() => {
    setCategories();
  }, []);

  if (!(entries && entries.count) || !(categories && categories.categories)) {
    if(entries.count === 0) {
      return <>
        <Filter />
        <h2>No data found!</h2>
      </>
    }
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Filter />
      <DisplayCount text="Available API's" count={entries.count} />
      <LazyAPIs entries={entries} />
    </>
  );
};

export default Entries;
