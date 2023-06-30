import { useContext, useEffect } from "react";

import { baseContext } from "../../../Context/BaseContext";

import ListItem from "../../ListItem";

import { Header } from "../EnterprisesList/styled";

function UsersList() {
  const { fetchUsers, setSelectedForm, selectedEnterprise, usersList } =
    useContext(baseContext);

  const getUsers = async () => {
    fetchUsers();
  };

  useEffect(() => {
    getUsers();
  }, [selectedEnterprise]);

  useEffect(() => {
    console.log("usersList: ", usersList);
  }, [usersList]);

  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Header>
        Usuários <button onClick={() => setSelectedForm("2")}>+</button>
      </Header>
      {usersList.length > 0 &&
        usersList.map((user) => (
          <ListItem key={user.emp_nm_usuario} name={user.emp_nm_usuario} />
        ))}
    </div>
  );
}

export default UsersList;
