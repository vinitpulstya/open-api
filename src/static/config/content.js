import IMG_ALL_API from "../images/icon-for-api.jpg";
import IMG_CATEGORY_API from "../images/category.jpg";
import IMG_RANDOM_API from "../images/random.jpg";
import { URL_ENTRIES, URL_CATEGORIES, URL_RANDOM } from "./urls";

const home_page = {
  cards: [
    {
      img: IMG_ALL_API,
      title: "Browse All",
      description:
        "Find API for your project from the complete list made available by'public-apis'.",
      link: URL_ENTRIES,
    },
    {
      img: IMG_CATEGORY_API,
      title: "Browse by category",
      description: "Know what you are looking for? Find by API's by category.",
      link: URL_CATEGORIES,
    },
    {
      img: IMG_RANDOM_API,
      title: "Random API",
      description: "Feeling adventurous? Find one random API.",
      link: URL_RANDOM,
    },
  ],
};

const header_links = {
  appRoutes: [
    {
      name: "All",
      link: URL_ENTRIES,
    },
    {
      name: "Random",
      link: URL_RANDOM,
    },
    {
      name: "Categories",
      link: URL_CATEGORIES,
    },
  ],
  external: [
    { name: "API DOCS", link: "" },
    { name: "WEB APP", link: "" },
  ],
};

export { home_page, header_links};


export const SEARCH_OPTS = {
  title: undefined,
  description: undefined,
  auth: undefined,
  https: undefined,
  cors: undefined,
  category: undefined
};

// used for lazy loading from list
export const APIs_PER_PAGE = 20;

export const entries_page = {
  CORS_OPTS: ['Yes', 'No', 'Unknown'],
  HTTPS_OPTS: ['HTTPS only', 'Excluding HTTPS']
};