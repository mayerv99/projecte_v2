import { useState, createContext, useEffect } from "react";

import { getAllEnterprises } from "../Services/enterprise";

import { getUsers } from "../Services/user";

import { getInterferences } from "../Services/interference";

export const baseContext = createContext({});

function BaseContextProvider({ children }) {
  const [enterprisesList, setEnterprisesList] = useState([]);
  const [selectedEnterprise, setSelectedEnterprise] = useState();

  const [usersList, setUsersList] = useState([]);

  const [interferencesList, setInterferencesList] = useState([]);

  const [selectedForm, setSelectedForm] = useState(0);

  const fetchEnterprises = async () => {
    const enterprises = await getAllEnterprises();

    setEnterprisesList(enterprises.data);
  };

  const fetchUsers = async () => {
    const users = await getUsers(selectedEnterprise);

    setUsersList(users.message);
  };

  const fetchInterferences = async () => {
    const interferences = await getInterferences(selectedEnterprise);

    setInterferencesList(interferences.message);
  };

  return (
    <baseContext.Provider
      value={{
        enterprisesList,
        setEnterprisesList,
        selectedEnterprise,
        setSelectedEnterprise,
        usersList,
        setUsersList,
        interferencesList,
        setInterferencesList,
        selectedForm,
        setSelectedForm,
        fetchEnterprises,
        fetchUsers,
        fetchInterferences,
      }}
    >
      {children}
    </baseContext.Provider>
  );
}

export default BaseContextProvider;
