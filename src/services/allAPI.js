import { commonAPI } from "./commonAPI.js";
import { SERVERURL } from "./serverURL.js";

export const createUser = async (body) => {
  return await commonAPI("POST", `${SERVERURL}/users/register`, body);
};

export const loginUser = async (body) => {
  return await commonAPI("POST", `${SERVERURL}/users/login`, body);
};

export const updateUser = async (body) => {
  return await commonAPI("POST", `${SERVERURL}/users/update`, body);
};

export const deleteUser = async (body) => {
  return await commonAPI("POST", `${SERVERURL}/users/delete`, body);
};