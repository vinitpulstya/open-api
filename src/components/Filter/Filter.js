import {
  Autocomplete,
  Button,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import AppStateContext from "../../services/app-state-context";
import { entries_page } from "../../static/config/content";

const Filter = (props) => {
  const ctx = useContext(AppStateContext);
  let { searchOpts, categories, setSearchOpts } = ctx;
  const [title, setTitle] = useState(searchOpts.title ? searchOpts.title : '');
  const [showOtherFilters, setShowOtherFilters] = useState(false);
  let timer = useRef(undefined);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // useEffect code here to be run on update
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setSearchOpts({ title: title });
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  const handleProtocolChange = (e, newValue) => {
    let new_val = undefined;
    switch (newValue) {
      case "HTTPS only":
        new_val = true;
        break;

      case "Excluding HTTPS":
        new_val = false;
        break;

      default:
        new_val = undefined;
        break;
    }
    setSearchOpts({ https: new_val });
  };

  const handleAuthSwitch = (e) => {
    if (e.target.checked === true) {
      setSearchOpts({ auth: "null" });
    } else {
      setSearchOpts({ auth: undefined });
    }
  };

  return (
    <>
      <div className="searchbox">
        <TextField
          value={title}
          label="Search"
          id="searchBox"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          //   onChange={(e) => {
          //     setSearchOpts({ title: e.target.value });
          //   }}
        />
        <Button
          onClick={() => setShowOtherFilters((prevState) => !prevState)}
          style={{ paddingBottom: "1rem" }}
        >
          {showOtherFilters ? "Hide advanced filters" : "Show advanced filters"}
        </Button>
      </div>
      <Grid
        id="other_filters"
        container
        justifyContent="space-evenly"
        style={{ marginTop: "1rem", display: showOtherFilters ? "" : "none" }}
      >
        <div className="filter_opt">
          <Autocomplete
            disablePortal
            id="category-filter"
            options={categories.categories}
            value={searchOpts.category}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Category" />}
            onChange={(e, newValue) => setSearchOpts({ category: newValue })}
          />
        </div>
        <div className="filter_opt">
          <Autocomplete
            disablePortal
            id="cors-filter"
            options={entries_page.CORS_OPTS}
            sx={{ width: 300 }}
            value={searchOpts.cors}
            renderInput={(params) => <TextField {...params} label="CORS" />}
            onChange={(e, newValue) => setSearchOpts({ cors: newValue })}
          />
        </div>
        <div className="filter_opt">
          <Autocomplete
            disablePortal
            id="cors-filter"
            options={entries_page.HTTPS_OPTS}
            sx={{ width: 300 }}
            value={
              searchOpts.https === true
                ? "HTTPS only"
                : searchOpts.https === false
                ? "Excluding HTTPS"
                : null
            }
            renderInput={(params) => <TextField {...params} label="Protocol" />}
            onChange={handleProtocolChange}
          />
        </div>
        <div className="filter_opt">
          <Typography variant="overline" display="inline">
            Without Auth Only
          </Typography>
          <Switch
            checked={searchOpts.auth === "null"}
            onChange={handleAuthSwitch}
            inputProps={{ "aria-label": "Without Auth Only" }}
            label="afds"
          />
        </div>
      </Grid>
    </>
  );
};

export default Filter;
