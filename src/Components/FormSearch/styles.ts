import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px 0;
`;

export const Form = styled.form`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 18px;
  padding: 20px 0;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;

  border-radius: 3px;
  border: 1px solid #ccc;

  width: 120px;
`;

export const Submit = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 3px;
  padding: 10px 30px;

  background-color: #e5e5e5;
  font-size: 18px;

  transition: background .2s linear;

  &:hover {
    background-color: #a1a1a1;
  }
`;