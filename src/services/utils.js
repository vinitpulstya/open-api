export const isObjectEmpty = (obj) => {
  if (
    obj && // null and undefined check
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  ) {
    return true;
  }
  return false;
};

export const getQueryString = (params) => {
  const queryString = Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
  return queryString;
};

export const getQueryUrl = (URL, queryString) => {
  return queryString.length === 0 ? URL : `${URL}?${queryString}`;
};
