import { useContext, useEffect } from "react";
import DisplayCount from "../../components/DisplayCount/DisplayCount";
import AppStateContext from "../../services/app-state-context";
import "./entries.scss";

import LazyAPIs from "../../components/LazyAPIs/LazyAPIs";
import { CircularProgress } from "@mui/material";

const Entries = () => {
  const ctx = useContext(AppStateContext);
  let { entries, setEntries, searchOpts } = ctx;

  useEffect(() => {
    setEntries(searchOpts);
  }, [searchOpts]);

  if (!(entries && entries.count)) {
    return <CircularProgress />;
  }

  return (
    <div>
      <DisplayCount text="Available API's" count={entries.count} />
      <LazyAPIs entries={entries} />
    </div>
  );
};

export default Entries;
