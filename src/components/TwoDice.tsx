import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, setDice1] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(2);

    function win(): string {
        let str1 = "";
        if (dice1 === dice2) {
            if (dice1 != 1) {
                str1 = "Win";
            } else {
                str1 = "Lose";
            }
        } else {
            str1 = "Try again";
        }
        return str1;
    }

    return (
        <div>
            <div>
                <Button onClick={() => setDice1(d6())}>Roll left die</Button>
                <span data-testid="left-die">{dice1}</span>
            </div>
            <div>
                <Button onClick={() => setDice2(d6())}>Roll right die</Button>
                <span data-testid="right-die">{dice2}</span>
            </div>
            <div>{win()}</div>
        </div>
    );
}
