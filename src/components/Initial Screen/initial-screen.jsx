import React, { useState } from "react";
import astrixLogo from "../../assets/images/Astrix Logo.png";
import firstImage from "../../assets/images/Frame 1261154651.png";
import secondImage from "../../assets/images/Frame 1261154652.png";
import thirdImage from "../../assets/images/Frame 1261154653.png";
import fourthImage from "../../assets/images/Frame 1261154660.png";
import fifthImage from "../../assets/images/Frame 1261154661.png";
import sixthImage from "../../assets/images/Frame 1261154662.png";
import seventhImage from "../../assets/images/Frame 1261154663.png";
import eightImage from "../../assets/images/Frame 1261154664.png";
import "./initial-screen.css";
const InitialScreen = () => {
    return (
        <div className="inital-div">
            <div className="logo">
                <img src={astrixLogo} />
            </div>
            <div className="text-div">
                <p>
                    WE
                    <div className="container">
                        <div className="box1">
                            <img height={61} width={371} src={firstImage} />
                        </div>
                        <div className="box2">
                            <p>ORGANIZE THE</p>
                        </div>
                    </div>
                </p>
                <p>
                    CONNECTION <img className="shrink-grow" width={539} height={74} src={secondImage} />{" "}
                </p>
                <p>
                    <img className="shrink-grow-middle" height={74} width={260} src={thirdImage} /> BETWEEN{" "}
                    <img width={167} height={74} src={fourthImage} /> MUSIC
                </p>
                <p>
                    ARTIST <img className="shrink-grow-middle" height={74} width={299} src={fifthImage} /> CULTURE{" "}
                    <img height={74} width={137} src={sixthImage} />{" "}
                </p>
                <p>
                    <img className="shrink-grow-bottom" width={158} height={74} src={seventhImage} /> ART{" "}
                    <img width={151} height={74} src={eightImage} /> & COLLECTIONS
                </p>
            </div>
        </div>
    );
};

export default InitialScreen;
