import styled from "styled-components"

export const Wrapper = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  border-radius: 50px;
  background-color: rgb(var(--primary-color));
  color: white;
  padding: 10px 15px;
  border: 1px solid transparent;
`

export const DownloadModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 99.9vw;
  height: 99.9vh;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Modal = styled.div`
  width: 480px;
  height: 600px;
  background-color: white;
  margin: 50px auto;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .close {
    color: white;
    background-color: red;
    width: 30px;
    border: 1px solid transparent;
    padding: 6px 2px;
    border-radius: 3px;
    margin-left: auto;
    cursor: pointer;
  }
  .download {
    margin: 20px auto;
    width: 100%;
    border: 1px solid transparent;
    padding: 6px 10px;
    background-color: rgb(var(--primary-color));
    color: white;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
  }
`
