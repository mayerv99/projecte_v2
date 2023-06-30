import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/enterprises",
});

export const getAllEnterprises = async () => {
  const allEnterprises = await instance
    .get("/")
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return allEnterprises;
};

export const createEnterprise = async (data) => {
  await instance
    .post("/", data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
