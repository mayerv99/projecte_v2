import { useContext } from "react";

import { baseContext } from "../../Context/BaseContext";

import { Button } from "./styled";

function CloseButton() {
  const { setSelectedForm } = useContext(baseContext);
  return <Button onClick={() => setSelectedForm(0)}>X</Button>;
}

export default CloseButton;
