import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 15px;
  line-height: 30px;

  button {
    margin-left: 10px;
    width: 30px;
    height: 30px;
    background-color: rgba(var(--primary-color), 0.8);
    border: 1px solid transparent;
    color: white;
    border-radius: 2px;
    cursor: pointer;
  }
`;
