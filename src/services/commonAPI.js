import axios from "axios";

export const commonAPI = async (method, url, body) => {
  const reqConfig = {
    method,
    url,
    data: body,
  };
  return await axios(reqConfig)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};