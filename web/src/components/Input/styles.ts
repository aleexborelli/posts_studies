import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid #111111;
  border-radius: 4px;
  width: 300px;
  height: 42px;
  padding: 10px 15px;
  margin-bottom: 10px;
  svg {
    margin-right: 5px;
    color: #373737;
  }
  input {
    flex: 1;
    height: 100%;
    padding-left: 15px;
    font-size: 16px;
    background: transparent;
    color: #000;
    border: 0;
    outline: 0;
    &::placeholder {
      color: #a5a5a5;
    }
  }
  .icon-click {
    cursor: pointer;
  }
`;
