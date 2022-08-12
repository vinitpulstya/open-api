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
  const valid_obj = {};
  for (let param of Object.keys(params)) {
    if (params[param]) {
      valid_obj[param] = params[param];
    }
  }
  const queryString = Object.keys(valid_obj)
    .map((key) => key + "=" + valid_obj[key])
    .join("&");
  return queryString;
};

export const getQueryUrl = (URL, queryString) => {
  return queryString.length === 0 ? URL : `${URL}?${queryString}`;
};
