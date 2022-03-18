import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

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
        </div>
    );
}

export default App;
