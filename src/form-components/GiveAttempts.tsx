import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttempsLeft] = useState<number>(3);
    const [attemptsGiven, setAttemptsGiven] = useState<string>("");
    const attemptRequired = parseInt(attemptsGiven) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attemptsID">
                <Form.Label>Input:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsGiven}
                    onChange={(event: ChangeEvent) =>
                        setAttemptsGiven(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttempsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft <= 0}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setAttempsLeft(attemptsLeft + attemptRequired)
                    }
                >
                    gain
                </Button>
            </div>
            <div> Attempts: {attemptsLeft} </div>
        </div>
    );
}
