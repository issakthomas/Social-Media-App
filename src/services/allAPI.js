import { commonAPI } from "./commonAPI.js";
import { SERVERURL } from "./serverURL.js";

export const createUser = async (body) => {
  return await commonAPI("POST", `${SERVERURL}/user/register`, body);
};

export const loginUser = async (body) => {
  return await commonAPI("POST", `${SERVERURL}/user/login`, body);
};

export const updateUser = async (body, header) => {
  return await commonAPI("POST", `${SERVERURL}/user/update`, body, header);
};

export const deleteUser = async (body) => {
  return await commonAPI("POST", `${SERVERURL}/user/delete`, body);
};

export const getUsers = async (searchKey) => {
  return await commonAPI("GET", `${SERVERURL}/user/get?search=${searchKey}`);
};

export const followUser = async (id, header) => {
  return await commonAPI("POST", `${SERVERURL}/user/follow/${id}`, {}, header);
};

export const createPost = async (body, header) => {
  return await commonAPI("POST", `${SERVERURL}/post/create`, body, header);
};

export const getPost = async (header) => {
  return await commonAPI("GET", `${SERVERURL}/post/get`, {}, header);
};

export const getFeed = async (header) => {
  return await commonAPI("GET", `${SERVERURL}/post/getAll`, {}, header);
};

export const likePost = async (postId, header) => {
  return await commonAPI(
    "POST",
    `${SERVERURL}/post/like/${postId}`,
    {},
    header,
  );
};

export const unlikePost = async (postId, header) => {
  return await commonAPI(
    "POST",
    `${SERVERURL}/post/unlike/${postId}`,
    {},
    header,
  );
};