import {
  URL_GET_CATEGORIES,
  URL_GET_ENTRIES,
  URL_GET_RANDOM,
  URL_GET_HEALTH,
} from "../static/config/urls";
import axios from "axios";
import { getQueryString, getQueryUrl } from "./utils";

export const getCategories = async () => {
  const categories = await axios.get(URL_GET_CATEGORIES);
  return categories.data;
};

export const getEntries = async (params) => {
  const queryString = getQueryString(params);
  const entries = await axios.get(getQueryUrl(URL_GET_ENTRIES, queryString));
  return entries.data;
};

export const getRandom = async (params) => {
  const queryString = getQueryString(params);
  const random_API = await axios.get(getQueryUrl(URL_GET_RANDOM, queryString));
  return random_API.data;
};

export const getHealth = async () => {
  const getHealth = await axios.get(URL_GET_HEALTH);
  return getHealth.data;
};
