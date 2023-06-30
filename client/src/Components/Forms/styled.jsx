import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => (props.width ? props.width : "100%")};

  label {
    padding: 10px 5px;
  }
  span {
    color: red;
    font-size: 14px;
    padding: 2px;
  }
`;

export const StyledInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #e3e3ec;
  border-radius: 4px;
  &:focus {
    outline: 2px solid rgb(45, 116, 254);
  }
  ${(props) => props.error && "border: 2px solid red"}
`;

export const FormWrapper = styled.div`
  width: 99vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;

  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: space-between;
  }

  button {
    background-color: rgba(var(--primary-color), 0.8);
    border: 1px solid transparent;
    padding: 10px 25px;
    border-radius: 2px;
    margin: 20px auto;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s linear;
    &:hover {
      background-color: rgb(var(--primary-color));
    }
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;

  margin-top: 10px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: space-between;
  }

  padding: 10px 0 15px 0;
  h2 {
    font-size: 16px;
  }
`;
