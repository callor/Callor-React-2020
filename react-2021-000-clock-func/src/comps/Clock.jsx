import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";

export default function Clock() {
    const [clock, setClock] = useState({
        time: moment().format("hh:mm:ss"),
        one: true,
        two: false,
        three: false,
        four: false,
        background: {
            backgroundColor: "#000000".replace(/0/g, function () {
                return (~~(Math.random() * 16)).toString(16);
            }),
        },
        class: "",
    });
    const clockOn = () => {
        setInterval(() => {
            if (clock.one === true) {
                setClock({
                    ...clock,
                    time: moment().format("hh:mm:ss"),
                });
            } else if (clock.four === true) {
                setClock({
                    ...clock,
                    time: moment().format("YYYY[-]MM[-]DD"),
                });
            }
        }, 1000);
    };
    useEffect(
        useCallback(() => clockOn(), [clockOn]),
        []
    );

    const onClick = () => {
        setClock({
            ...clock,
            background: {
                backgroundColor: "#000000".replace(/0/g, function () {
                    return (~~(Math.random() * 16)).toString(16);
                }),
            },
        });
        /*
        if (clock.one === true) {
            setClock({ class: "faded" });
            setTimeout(() => {
                setClock({
                    ...clock,
                    time: moment().format("dddd"),
                    one: false,
                    two: true,
                    class: "",
                });
            }, 200);
        } else if (clock.two === true) {
            setClock({ class: "faded" });
            setTimeout(() => {
                setClock({
                    ...clock,
                    time: moment().format("MMMM Do YY"),
                    two: false,
                    three: true,
                    class: "",
                });
            }, 200);
        } else if (clock.three === true) {
            setClock({ class: "faded" });
            setTimeout(() => {
                setClock({
                    ...clock,
                    time: moment().format("h:mm a"),
                    three: false,
                    four: true,
                    class: "",
                });
            }, 200);
        } else if (clock.four === true) {
            setClock({ class: "faded" });
            setTimeout(() => {
                setClock({
                    ...clock,
                    time: moment().format("HH:mm:ss"),
                    four: false,
                    one: true,
                    class: "",
                });
            }, 200);
        }
		*/
    };

    return (
        <div id="clock" style={clock.background} onClick={onClick}>
            <h1 className={clock.class}>{clock.time}</h1>
        </div>
    );
}
