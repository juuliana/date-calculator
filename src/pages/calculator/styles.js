import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;

  margin: 2rem 15rem;
  border-radius: 20px;
  height: 90vh;

  font-family: "Montserrat", Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Helvetica Neue, sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;

  margin: 0.5rem;
  height: 90vh;
  border-radius: 15px;

  background-color: #c0c0c0;
`;

export const Subtitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const Response = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

export const View = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 98%;
  height: 1.8rem;
  margin-bottom: 1.5rem;
  padding-left: 0.7rem;

  border: 0.5px;
  border-radius: 3px;

  font-size: 0.9rem;
  font-weight: 400;
`;

export const InputDate = styled.input`
  display: flex;
  width: 98%;
  height: 1.8rem;
  margin-bottom: 1.5rem;
  padding-left: 0.7rem;

  border: 0.5px;
  border-radius: 3px;

  font-size: 0.9rem;
  font-weight: 400;
`;

export const InputSquare = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  height: 5rem;
  margin-bottom: 1.5rem;
  margin-right: 1.1rem;
  padding: 0.6rem;

  border: 0px;
  border-radius: 3px;

  text-align: center;
  font-size: 2rem;
`;

export const Button = styled.button`
  background-color: black;
  color: white;

  font-weight: 700;
  font-size: 0.75rem;

  border: none;
  border-radius: 3.125rem;

  width: 13rem;
  height: 2.6rem;
  padding: 0 1rem;

  cursor: pointer;

  align-items: center;
  justify-content: center;
`;

export const Button2 = styled.button`
  width: 12rem;
  height: 2.6rem;

  margin-left: 2rem;

  border: 0;
  border-radius: 2rem;
  cursor: pointer;

  font-weight: 700;
  font-size: 0.8rem;
  color: white;

  background-color: green;
`;
