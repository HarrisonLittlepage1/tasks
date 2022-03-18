import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holidays = "🎈" | "🌮" | "🎃" | "🦃" | "🎄";
//Birthday 1/3
//cinco de mayo 5/5
//halloween 10/31
//thanksgiving 11/?
//Christmas 12/25

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<holidays>("🎄");
    function alphabet(): void {
        if (holiday === "🎈") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🌮");
        } else if (holiday === "🌮") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else {
            setHoliday("🎈");
        }
    }

    function date(): void {
        if (holiday === "🎈") {
            setHoliday("🌮");
        } else if (holiday === "🌮") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else {
            setHoliday("🎈");
        }
    }

    return (
        <div>
            <div>
                <Button onClick={() => alphabet()}>Advance by Alphabet</Button>
                <Button onClick={() => date()}>Advance by Year</Button>
            </div>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
