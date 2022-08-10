import { createContext, useEffect, useState } from "react";
import { SEARCH_OPTS } from "../static/config/content";
import { getCategories, getEntries } from "./data-fetch-service";
import { isObjectEmpty } from "./utils";

const AppStateContext = createContext({
  theme: "light",
  changeTheme: (themeType) => {},
  categories: {},
  setCategories: () => {},  
  entries: {},
  setEntries: (params) => {},
  searchOpts: SEARCH_OPTS,
  setSearchOpts: (opts) => {}
});

export const AppStateContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [categories, setCategories] = useState({});
  const [entries, setEntries] = useState({});
  const [searchOpts, setSearchOpts] = useState(SEARCH_OPTS);

  useEffect(() => {
    const preSelectedTheme = localStorage.getItem("theme");
    if (preSelectedTheme === "dark") {
      setTheme("dark");
    };

    const existingSearchOpts = localStorage.getItem('searchOpts');
    if(existingSearchOpts) {
      setSearchOpts(JSON.parse(existingSearchOpts));
    }
  }, []);

  const changeTheme = (themeType) => {
    if (themeType === "light" || themeType === "dark") {
      localStorage.setItem("theme", themeType);
      setTheme(themeType);
    }
  };

  const fetchCategories = async () => {
    if (isObjectEmpty(categories)) {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("this data already exists", categories);
    }
  };

  const fetchEntries = async (params) => {
    try {
        const entries = await getEntries(params);
        setEntries(entries);
    } catch(err) {
        console.error(err);
    }
  }

  const changeSearchOpts = (opts) => {
    setSearchOpts(prevStateObj => {
      const newOpts = {...prevStateObj, ...opts}
      return newOpts;
    })
  }

  return (
    <AppStateContext.Provider
      value={{
        currTheme: theme,
        changeTheme: changeTheme,
        categories: categories,
        setCategories: fetchCategories,
        entries: entries,
        setEntries: fetchEntries,
        searchOpts: searchOpts,
        setSearchOpts: changeSearchOpts
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
