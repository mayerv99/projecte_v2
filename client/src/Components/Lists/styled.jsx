import styled from "styled-components";

export const Wrapper = styled.div`
  width: 99vw;
  height: 98vh;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
`;

export const DivList = styled.div`
  width: 30%;
  ${(props) => !props.noBorder && "border-right: 1px solid gray"}
`;
