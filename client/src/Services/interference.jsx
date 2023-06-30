import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/interferences",
});

export const getInterferences = async (id) => {
  const interferences = await instance
    .get(`${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return interferences;
};

export const createInterference = async (data) => {
  await instance
    .post("/", data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
