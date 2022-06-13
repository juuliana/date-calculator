import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 15rem;
  border-radius: 20px;
  height: 85vh;
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 130px;
  margin-bottom: 30px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const Spacer = styled.span`
  width: 5;
  background-color: white;
`;

export const Subtitle = styled.span`
  color: white;
  font-size: 1rem;
`;

export const Title = styled.span`
  color: white;
  font-size: 1rem;
`;

export const Response = styled.span`
  font-size: 1.5rem;
`;

export const View = styled.div`
  justify-content: center;
  height: 130px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SquareView = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const InputDate = styled.input`
  display: flex;
  align-self: center;

  width: 21rem;
  height: 3.5rem;

  margin: 0.5rem 0 5rem 0;
  padding: 2rem;

  font-size: 2rem;
`;

export const SquareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSquare = styled.input`
  width: 5rem;
  height: 4.5rem;
  margin: 0 2rem 0.5rem 2rem;

  padding: 0.6rem;

  text-align: center;
  font-size: 2rem;
`;

export const Button = styled.button`
  background-color: #469be9;
  position: absolute;

  width: 15rem;
  height: 4.5rem;
  padding: 0 1rem;

  align-items: center;
  justify-content: center;

  :disabled {
    background-color: #293237;
  }

  :hover {
    width: 15.5rem;
    height: 5rem;
  }
`;

export const Result = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  width: 25rem;
  height: 7rem;
  padding-top: 3.5rem;

  margin-top: 2.25rem;
  border-radius: 20px;
  background-color: white;

  animation: hover 0.9s forwards;
`;

export const Button2 = styled.button`
  position: absolute;
  z-index: 10;

  width: 3.2rem;
  height: 3.2rem;
  background-color: #e77d7d;

  :hover {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
