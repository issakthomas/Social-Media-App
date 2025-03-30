import axios from "axios";

export const commonAPI = async (method, url, body, header) => {
  const reqConfig = {
    method,
    url,
    data: body,
    headers: header || {},
  };
  return await axios(reqConfig)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};