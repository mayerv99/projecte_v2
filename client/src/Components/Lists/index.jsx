import { useContext } from "react";

import { baseContext } from "../../Context/BaseContext";

import EnterprisesList from "./EnterprisesList";

import { Wrapper, DivList } from "./styled";
import UsersList from "./UsersList";
import InterferenceList from "./InterferenceList";

function Lists() {
  const { selectedEnterprise } = useContext(baseContext);

  return (
    <Wrapper>
      <DivList noBorder={!selectedEnterprise}>
        <EnterprisesList />
      </DivList>
      {selectedEnterprise && (
        <DivList>
          <UsersList />
        </DivList>
      )}
      {selectedEnterprise && (
        <DivList noBorder={true}>
          <InterferenceList />
        </DivList>
      )}
    </Wrapper>
  );
}

export default Lists;
