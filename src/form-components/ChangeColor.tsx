import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(event) => setChosenColor(event.target.value)}
                    id={"color-" + color}
                    label={color}
                    value={color}
                    style={{ backgroundColor: color }}
                    checked={chosenColor === color}
                />
            ))}
            <div>
                <span>
                    you have chosen
                    <span
                        style={{ backgroundColor: chosenColor }}
                        data-testid="colored-box"
                    >
                        {chosenColor}
                    </span>
                </span>
            </div>
        </div>
    );
}
