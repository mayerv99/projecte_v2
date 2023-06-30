import { useContext, useEffect } from "react";

import { baseContext } from "../../../Context/BaseContext";

import { Header } from "../EnterprisesList/styled";

import ListItem from "../../ListItem";

function InterferenceList() {
  const {
    fetchInterferences,
    selectedEnterprise,
    interferencesList,
    setSelectedForm,
  } = useContext(baseContext);

  const getInterferences = async () => {
    await fetchInterferences();
  };

  useEffect(() => {
    getInterferences();
  }, [selectedEnterprise]);

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
        Interferências<button onClick={() => setSelectedForm("3")}>+</button>
      </Header>
      {interferencesList?.map((interference) => (
        <ListItem
          key={interference.cod_interferencia}
          name={interference.int_nm_interferencia}
          code={interference.cod_interferencia}
        />
      ))}
    </div>
  );
}

export default InterferenceList;
