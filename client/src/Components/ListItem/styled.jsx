import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #e6e6e6;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: rgba(var(--primary-color), 0.6);
  }

  background-color: ${(props) =>
    props.selected ? "rgba(var(--primary-color), 0.9)" : "transparent"};

  span {
    font-weight: 600;
  }
`;
