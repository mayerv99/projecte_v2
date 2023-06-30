import { useContext } from "react";

import { baseContext } from "../../Context/BaseContext";

import EnterpriseForm from "./EnterprisesForm";

import UsersForm from "./UsersForm";

import InterferencesForm from "./InterferencesForm";

export default function Forms() {
  const { selectedForm } = useContext(baseContext);

  const forms = {
    0: null,
    1: <EnterpriseForm />,
    2: <UsersForm />,
    3: <InterferencesForm />,
  };

  const returnComponent = () => {
    return forms[selectedForm];
  };

  return <div>{returnComponent()}</div>;
}
