import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/users",
});

export const getUsers = async (id) => {
  const users = await instance
    .get(`/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return users;
};

export const createUser = async (data) => {
  await instance
    .post("/", data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
