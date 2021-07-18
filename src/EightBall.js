import React, { useState } from "react";

import getRandomIdx from "./helpers/helper";

import { defaultState } from "./static/EightBallAnswers";

import "./static/EightBall.css";

const EightBall = ({ answers }) => {

    const [eightBallMsg, setEightBallMsg] = useState(defaultState.msg);
    const [eightBallColor, setEightBallColor] = useState(defaultState.color);
    const [eightBallCtrGreen, setEightBallCtrGreen] = useState(0);
    const [eightBallCtrGoldenrod, setEightBallCtrGoldenrod] = useState(0);
    const [eightBallCtrRed, setEightBallCtrRed] = useState(0);

    const getAnswer = () => {
        const idx = getRandomIdx(answers.length);

        // ctrs object provides a non-if way of accessing and updating the
        //  counters. 
        // ctrs[color][ctr] accesses the counter for 'color'
        // ctrs[color][fx]() calls the useState setter for 'color'

        const ctrs = {
            green: {
                ctr: eightBallCtrGreen,
                fx: setEightBallCtrGreen
            },
            goldenrod: {
                ctr: eightBallCtrGoldenrod,
                fx: setEightBallCtrGoldenrod
            },
            red: {
                ctr: eightBallCtrRed,
                fx: setEightBallCtrRed
            }
        }

        setEightBallMsg(answers[idx].msg);
        setEightBallColor(answers[idx].color);

        const newColor = answers[idx].color;
        const currCtr = ctrs[newColor]["ctr"];
        ctrs[newColor]["fx"](currCtr + 1);

    }

    const resetEightBall = () => {
        setEightBallMsg(defaultState.msg);
        setEightBallColor(defaultState.color);
        setEightBallCtrGreen(0);
        setEightBallCtrGoldenrod(0);
        setEightBallCtrRed(0);
    }

    return (
        <>
            <div onClick={getAnswer} className={`EightBall-Main EightBall-${eightBallColor.toLowerCase()}`}>
                <p className="EightBall-Msg">{eightBallMsg}</p>
            </div>

            <div className="EightBall-Stats-Div">
                <div className="EightBall-Stat EightBall-green"><span>{eightBallCtrGreen}</span></div>
                <div className="EightBall-Stat EightBall-goldenrod"><span>{eightBallCtrGoldenrod}</span></div>
                <div className="EightBall-Stat EightBall-red"><span>{eightBallCtrRed}</span></div>

                <button className="EightBall-Btn-Reset" onClick={resetEightBall} >Reset Eightball</button>
            </div>
        </>
    )

};

export default EightBall;
