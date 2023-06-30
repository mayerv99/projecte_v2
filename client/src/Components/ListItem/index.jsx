import { Wrapper } from "./styled";

function ListItem({ name, code, onClick, selected }) {
  return (
    <Wrapper onClick={onClick} selected={selected}>
      <span>{name}</span>
      <span>{code}</span>
    </Wrapper>
  );
}

export default ListItem;
