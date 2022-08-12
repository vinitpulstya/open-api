import {
  URL_GET_CATEGORIES,
  URL_GET_ENTRIES,
  URL_GET_RANDOM,
  URL_GET_HEALTH,
} from "../static/config/urls";
import axios from "axios";
import { getQueryString, getQueryUrl } from "./utils";

export const getCategories = async () => {
  /**
   * @params none
   * @Output array of strings, each element being a category
   */
  const categories = await axios.get(URL_GET_CATEGORIES);
  return categories.data;
};

export const getEntries = async (params) => {
  /** 
   * None of the params are required.
    * @params { title: string,
                description: string,
                auth: string,
                https: bool,
                cors: string,
                category: string }
    */
  /** 
    * @Output {
      "count":number,"entries":[
                {
                  "API": string,
                  "Description": string,
                  "Auth": string,
                  "HTTPS": bool,
                  "Cors": string,
                  "Link": string,
                  "Category": string
                }
                ]}
  */
  const queryString = getQueryString(params);
  const entries = await axios.get(getQueryUrl(URL_GET_ENTRIES, queryString));
  return entries.data;
};

export const getRandom = async (params) => {
  /** 
   * None of the params are required.
    * @params { title: string,
                description: string,
                auth: string,
                https: bool,
                cors: string,
                category: string }
    */
  /** 
    * @Output {
      "count":number,"entries":[
                {
                  "API": string,
                  "Description": string,
                  "Auth": string,
                  "HTTPS": bool,
                  "Cors": string,
                  "Link": string,
                  "Category": string
                }
                ]}
  */
  const queryString = getQueryString(params);
  const random_API = await axios.get(getQueryUrl(URL_GET_RANDOM, queryString));
  return random_API.data;
};

export const getHealth = async () => {
  /**
   * @params none
   * @Ouput {alive: bool}
   */
  const getHealth = await axios.get(URL_GET_HEALTH);
  return getHealth.data;
};
