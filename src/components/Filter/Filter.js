import {
  Autocomplete,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import AppStateContext from "../../services/app-state-context";
import { entries_page } from "../../static/config/content";

const Filter = () => {
  const ctx = useContext(AppStateContext);
  let { searchOpts, categories, setSearchOpts } = ctx;


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
          value={searchOpts.title}
          label="Search"
          id="searchBox"
          fullWidth
          onChange={(e) => {
            
          }}
        />
      </div>
      <Grid
        id="other_filters"
        container
        justifyContent="space-evenly"
        style={{ marginTop: "2rem" }}
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
        {/* <div className="filter_opt">
          <Typography variant="overline" display="inline">
            HTTPS Only
          </Typography>
          <Switch
            checked={searchOpts.https}
            // onChange={handleChange}
            inputProps={{ "aria-label": "HTTPS Only" }}
          />
        </div> */}
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
