import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

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
            </header>
            Best fast food mexican:
            <ul>
                <li>Moes</li>
                <li>Qdoba</li>
                <li>Chipotle</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
