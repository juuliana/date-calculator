import { useState } from "react";
import dateToBR from "../../functions/dateToBR";
import isLeapYear from "../../functions/isLeapYear";
import {
  Button,
  Button2,
  Container,
  Content,
  Footer,
  Header,
  InputDate,
  InputSquare,
  Main,
  Response,
  Result,
  Spacer,
  SquareContainer,
  SquareView,
  Subtitle,
  Title,
  View,
} from "./styles";

function Calculator() {
  const [firstDate, setFirstDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);
  const [bissexto, setBissexto] = useState(0);
  const [unjustifiedAbsence, setUnjustifiedAbsence] = useState(0);
  const [justifiedAbsence, setJustifiedAbsence] = useState(0);
  const [leaveHealth, setLeaveHealth] = useState(0);
  const [leaveHealthFamily, setLeaveHealthFamily] = useState(0);

  const fiveYears = 1825;
  const oneDayInMiliseconds = 60 * 60 * 1000 * 24;

  function calcDate() {
    const firstDateBR = dateToBR(firstDate);

    const year = firstDateBR.slice(6, 10);
    const month = firstDateBR.slice(3, 5);
    const day = firstDateBR.slice(0, 2);

    const hour = new Date().toLocaleTimeString("pt-br");
    const newDate = new Date(Date.parse(`${month} ${day} ${year} ${hour}`));

    const discount =
      Number(fiveYears - 1) +
      Number(unjustifiedAbsence) +
      Number(justifiedAbsence) +
      Number(leaveHealth) +
      Number(leaveHealthFamily);

    const dateLast = new Date(
      newDate.getTime() + oneDayInMiliseconds * (discount || 0)
    );

    const dateLastFormatted = new Date(dateLast)
      .toJSON()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");

    const lastMonth = dateLastFormatted.slice(3, 5);

    verifyLeapYear(dateLast, newDate, month, lastMonth);
  }

  function verifyLeapYear(dateLast, formattedDate, month, lastMonth) {
    const firstYear = formattedDate.getFullYear();
    const lastYear = dateLast.getFullYear();

    for (var year = firstYear; year <= lastYear; year++) {
      const leapYear = isLeapYear(year);

      if (year === firstYear && leapYear) {
        if (month < 3) {
          setBissexto(bissexto + 1);
        }
      }

      if (year === lastYear && leapYear) {
        if (lastMonth < 3) {
          setBissexto(bissexto + 1);
        }
      }

      if (year !== firstYear && year !== lastYear && leapYear) {
        setBissexto(bissexto + 1);
      }
    }

    const date = new Date(dateLast + bissexto)
      .toJSON()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");

    setLastDate(date);
  }

  return (
    <Container>
      <Header>
        <Button2 onClick={() => window.location.reload(true)}>X</Button2>

        <View>
          <Subtitle>Data inicial</Subtitle>
          <InputDate
            type="date"
            onChange={(text) => setFirstDate(text.target.value)}
          />
        </View>
      </Header>

      <Main>
        <Content>
          <Title>Faltas</Title>
          <SquareView>
            <SquareContainer>
              <InputSquare
                placeholder="0"
                onChange={(text) => setJustifiedAbsence(text.target.value)}
              />
              <Subtitle>Justificadas</Subtitle>
            </SquareContainer>
            <SquareContainer>
              <InputSquare
                placeholder="0"
                onChange={(text) => setUnjustifiedAbsence(text.target.value)}
              />
              <Subtitle>Injustificadas</Subtitle>
            </SquareContainer>
          </SquareView>
        </Content>

        <Spacer />

        <Content>
          <Title>Licenças saúde</Title>
          <SquareView>
            <SquareContainer>
              <InputSquare
                placeholder="0"
                onChange={(text) => setLeaveHealth(text.target.value)}
              />
              <Subtitle>Pessoal</Subtitle>
            </SquareContainer>
            <SquareContainer>
              <InputSquare
                placeholder="0"
                onChange={(text) => setLeaveHealthFamily(text.target.value)}
              />
              <Subtitle>Família</Subtitle>
            </SquareContainer>
          </SquareView>
        </Content>
      </Main>

      <Footer>
        {firstDate && lastDate && (
          <Result>
            <Response>Data final: {lastDate}</Response>
          </Result>
        )}

        <Button onClick={calcDate} disabled={!firstDate}>
          Calcular
        </Button>
      </Footer>
    </Container>
  );
}

export default Calculator;
