import { useState } from "react";
import isLeapYear from "../../functions/isLeapYear";
import {
  Button,
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
  const [leaveHealth, setLeaveHealth] = useState(0);

  const stopedPeriod = 583;
  const fiveYears = 1825;
  const oneDayInMiliseconds = 60 * 60 * 1000 * 24;

  function calcDate() {
    const year = firstDate.slice(6, 10);
    const month = firstDate.slice(3, 5);
    const day = firstDate.slice(0, 2);

    const hour = new Date().toLocaleTimeString("pt-br");
    const date = new Date(`${day} ${month} ${year} ${hour}`);
    const time = date.getTime();

    const discount =
      Number(fiveYears) +
      Number(unjustifiedAbsence) +
      Number(leaveHealth) +
      Number(stopedPeriod);

    const dateLast = new Date(time + oneDayInMiliseconds * discount - 1);

    verifyLeapYear(dateLast, date);
  }

  function verifyLeapYear(dateLast, formattedDate) {
    const firstYear = formattedDate.getFullYear();
    const lastYear = dateLast.getFullYear();

    for (var year = firstYear; year <= lastYear; year++) {
      const leapYear = isLeapYear(year);

      if (year === firstYear && leapYear) {
        const firstMonth = formattedDate.getMonth();

        if (firstMonth < 3) {
          setBissexto(bissexto + 1);
        }
      }

      if (year === lastYear && leapYear) {
        const lastMonth = formattedDate.getMonth();

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
                onChange={(text) => setUnjustifiedAbsence(text.target.value)}
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
                onChange={(text) => setLeaveHealth(text.target.value)}
              />
            </div>
          </div>

          <View>
            <Button onClick={calcDate}>CALCULAR</Button>
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
