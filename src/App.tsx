import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Header check</h1>;
            <img
                src="https://variety.com/wp-content/uploads/2021/05/Top-Gun-2.jpg"
                alt="Top Gun"
            />
            <header className="App-header">
                UD CISC275 Hello World Harrison Littlepage
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            <div className="App-first-col">
                                column and rectangle one
                            </div>
                        </Col>
                        <Col>
                            <div className="App-second-col">
                                column and rectangle two
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <hr />
            <ChangeColor></ChangeColor>
            <hr />
            <CheckAnswer expectedAnswer={""}></CheckAnswer>
            <hr />
            <EditMode></EditMode>
            <hr />
            <GiveAttempts></GiveAttempts>
            <hr />
            <MultipleChoiceQuestion
                options={[]}
                expectedAnswer={""}
            ></MultipleChoiceQuestion>
        </div>
    );
}

export default App;
