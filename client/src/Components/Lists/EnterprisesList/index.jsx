import { useContext, useEffect } from "react";

import { baseContext } from "../../../Context/BaseContext";

import { Header } from "./styled";

import ListItem from "../../ListItem";

function EnterpriseList() {
  const {
    fetchEnterprises,
    enterprisesList,
    selectedEnterprise,
    setSelectedEnterprise,
    selectedForm,
    setSelectedForm,
  } = useContext(baseContext);

  useEffect(() => {
    fetchEnterprises();
  }, [selectedForm]);

  const handleClick = (id) => {
    if (id === selectedEnterprise) {
      setSelectedEnterprise();
      return;
    }
    setSelectedEnterprise(id);
  };

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
        Empreendimentos <button onClick={() => setSelectedForm("1")}>+</button>
      </Header>
      {enterprisesList.map((enterprise) => (
        <ListItem
          code={enterprise.cod_empreendimento}
          key={enterprise.cod_empreendimento}
          name={enterprise.emp_nm_empreendimento}
          onClick={() => handleClick(enterprise.cod_empreendimento)}
          selected={selectedEnterprise === enterprise.cod_empreendimento}
        />
      ))}
    </div>
  );
}

export default EnterpriseList;
