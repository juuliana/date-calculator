import { useState } from "react";
import isLeapYear from "../../functions/isLeapYear";
import {
  Button,
  Button2,
  Container,
  Content,
  Input,
  InputSquare,
  Response,
  Subtitle,
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
  const [stopedPeriod, setStopedPeriod] = useState(0);

  const fiveYears = 1825;
  const oneDayInMiliseconds = 60 * 60 * 1000 * 24;

  function updateStopedPeriod() {
    if (stopedPeriod === 0) {
      setStopedPeriod(583);
    } else {
      setStopedPeriod(0);
    }
  }

  function calcDate() {
    const year = firstDate.slice(6, 10);
    const month = firstDate.slice(3, 5);
    const day = firstDate.slice(0, 2);

    const hour = new Date().toLocaleTimeString("pt-br");
    const newDate = new Date(Date.parse(`${month} ${day} ${year} ${hour}`));

    const discount =
      Number(fiveYears - 2) +
      Number(unjustifiedAbsence) +
      Number(justifiedAbsence) +
      Number(leaveHealth) +
      Number(leaveHealthFamily) +
      Number(stopedPeriod);

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
        console.log("aiquix");
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
      <Content>
        <main>
          <Subtitle>Nome da pessoa</Subtitle>
          <Input />

          <Subtitle>Data inicial</Subtitle>
          <Input
            placeholder="Ex: 27/12/2021"
            onChange={(text) => setFirstDate(text.target.value)}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 30,
            }}
          >
            <div>
              <Subtitle style={{ marginLeft: 13 }}>
                Faltas justificadas
              </Subtitle>
              <InputSquare
                placeholder="0"
                onChange={(text) => setJustifiedAbsence(text.target.value)}
              />
            </div>
            <div>
              <Subtitle style={{ marginLeft: 7 }}>
                Faltas injustificadas
              </Subtitle>
              <InputSquare
                placeholder="0"
                onChange={(text) => setUnjustifiedAbsence(text.target.value)}
              />
            </div>
            <div>
              <Subtitle style={{ marginLeft: 24 }}>Licença Saúde</Subtitle>
              <InputSquare
                placeholder="0"
                onChange={(text) => setLeaveHealth(text.target.value)}
              />
            </div>
            <div>
              <Subtitle>Licença saúde (família)</Subtitle>
              <InputSquare
                placeholder="0"
                onChange={(text) => setLeaveHealthFamily(text.target.value)}
              />
            </div>
          </div>

          <View>
            <Button
              onClick={calcDate}
              disabled={!firstDate}
              style={
                firstDate
                  ? { backgroundColor: "black" }
                  : {
                      backgroundColor: "#00000050",
                    }
              }
            >
              CALCULAR
            </Button>
            <Button2 onClick={updateStopedPeriod}>
              {stopedPeriod === 0 ? "ADICIONAR" : "REMOVER"} 583
            </Button2>
            <Button2
              onClick={() => window.location.reload(true)}
              style={{ backgroundColor: "red" }}
            >
              LIMPAR
            </Button2>
          </View>

          <View>
            {lastDate && <Response>A data final será: {lastDate}</Response>}
          </View>
        </main>
      </Content>
    </Container>
  );
}

export default Calculator;
