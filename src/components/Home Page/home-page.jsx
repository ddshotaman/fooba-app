import "./home-page.css";
import React, { useState } from "react";
import brandImage from "../../assets/images/Astrix Branding.png";
import brandName from "../../assets/images/astrixname.png";
import astersick from "../../assets/images/_.png";
import peopleGroup from "../../assets/images/Frame 1261154678.png";
import cardImage from "../../assets/images/Card Small.png";
import collectionImageOne from "../../assets/images/Frame 1261154670.png";
import collectionImageTwo from "../../assets/images/Frame 1261154671.png";
import collectionImageThree from "../../assets/images/Frame 1261154672.png";
import collectionImageFour from "../../assets/images/Frame 1261154671 (1).png";
import locationImage from "../../assets/images/Icons (2).png";
import clockImage from "../../assets/images/Icons (3).png";
import eventImageOne from "../../assets/images/Frame 1261154684.png";
import eventImageTwo from "../../assets/images/Frame 1261154685.png";
import eventImageThree from "../../assets/images/Frame 1261154686.png";
import collectionImageFive from "../../assets/images/Frame 1261154670 (1).png";
import collectionImageSix from "../../assets/images/Frame 1261154672 (1).png";
import Carousel from "react-elastic-carousel";

const HomePage = () => {
    const [event, setEvent] = useState(true);
    const [collection, setCollection] = useState(false);
    const [type, setType] = useState("event");
    const collectionArr = [
        collectionImageOne,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageOne,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageOne,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageOne,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
    ];
    const eventsArr = [
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageFive,
        collectionImageSix,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageFive,
        collectionImageSix,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageFive,
        collectionImageSix,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageFive,
        collectionImageSix,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageFive,
        collectionImageSix,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageFive,
        collectionImageSix,
        collectionImageTwo,
        collectionImageThree,
        collectionImageFour,
        collectionImageFive,
        collectionImageSix,
    ];

    const handleToggle = (type) => {
        if (type == "event") {
            setCollection(false);
            setEvent(true);
        } else if (type == "collection") {
            setEvent(false);
            setCollection(true);
        }
        setType(type);
    };
    return (
        <div className="main-conatiner">
            <div className="left">
                <div className="heading">
                    <img className="brand-image" height={80} width={80} src={brandImage} />
                    <img width={163} height={64} src={brandName} />
                </div>
                <div className="brand-text">
                    <div>
                        <p>ASTR</p>
                        <p>IX</p>
                    </div>
                    <div className="carousal">
                        {type == "collection" && (
                            <Carousel
                                autoPlaySpeed={1000}
                                showArrows={false}
                                enableAutoPlay={true}
                                itemsoShow={3}
                                initialActiveIndex={0}
                            >
                                {collectionArr.map((item, index) => {
                                    return <img key={index} src={item} className="carousal-img"></img>;
                                })}
                            </Carousel>
                        )}
                        {type == "event" && (
                            <Carousel
                                autoPlaySpeed={1000}
                                showArrows={false}
                                enableAutoPlay={true}
                                itemsoShow={3}
                                initialActiveIndex={0}
                            >
                                {eventsArr.map((item, index) => {
                                    return <img key={index} src={item} className="carousal-img"></img>;
                                })}
                            </Carousel>
                        )}
                    </div>

                    <div>
                        <p>COLLE</p>
                        <p>ECTI</p>
                        <p>BLE</p>
                    </div>
                </div>
                <div style={{ backgroundColor: type == "event" ? "#282b30" : "#484e56" }} className="bottom-toggle">
                    <div
                        style={{ backgroundColor: event ? "#484e56" : "#282b30" }}
                        onClick={() => handleToggle("event")}
                        className="event-button"
                    >
                        <p>Events</p>
                    </div>
                    <div
                        style={{ backgroundColor: collection ? "#484e56" : "#282b30" }}
                        onClick={() => handleToggle("collection")}
                        className="collection-button"
                    >
                        <p>Collections</p>
                    </div>
                </div>
            </div>
            <div className="scrolling-text-container">
                <div className="scrolling-text">
                    <p>Event : Oasis Bus tour , JLN Stadium ,</p>
                    <p>
                        <img className="asterick" height={40} width={38} src={astersick} />
                    </p>
                    <p>Event : Oasis Bus tour , JLN Stadium </p>
                    <p>
                        <img className="asterick" height={40} width={38} src={astersick} />
                    </p>
                    <p>Delhi Collection Live : Meta Lives , live on astrix</p>
                    <p>
                        <img className="asterick" height={40} width={38} src={astersick} />
                    </p>
                    <p>Delhi Collection Live : Meta Lives , live on astrix</p>
                </div>
            </div>
            <div className="right">
                <div className="right-heading">
                    <p>Explore Youre First </p>
                    {type == "collection" && <p>Collectible</p>}
                    {type == "event" && <p>Event</p>}
                </div>
                <div style={{ height: type == "event" ? "330px" : "378px" }} className="right-middle">
                    {type == "collection" && <p>Meta</p>}
                    {type == "event" && <p>Event Name</p>}
                    {type == "collection" && <p>Lives</p>}
                    <div className="sub-heading">
                        {type == "collection" && <p>Live in Astrix</p>}
                        {type == "event" && (
                            <p>
                                <img style={{ marginRight: "12px" }} height={27} width={27} src={locationImage} />
                                Venue{" "}
                                <img
                                    style={{ marginLeft: "12px", marginRight: "12px" }}
                                    height={27}
                                    width={27}
                                    src={clockImage}
                                />{" "}
                                04/3/2024 @19:00
                            </p>
                        )}
                    </div>
                    <div className="middle-bottom">
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>consectetur. Ac lorem massa in morbi </p>
                        <p>et sed ipsum. Pellentesque mattis </p>
                        <p>condimentum ut nulla.</p>
                    </div>
                    {type == "collection" && (
                        <div className="image-group">
                            <img width={150} height={40} src={peopleGroup} />
                            <p>22k people interested</p>
                        </div>
                    )}
                </div>
                {type == "collection" && (
                    <div className="bottom">
                        <p>Collectibles</p>
                        <div className="card-images">
                            <img width={164} height={224} src={cardImage} />
                            <img width={164} height={224} src={cardImage} />
                            <img width={164} height={224} src={cardImage} />
                        </div>
                    </div>
                )}
                {type == "event" && (
                    <div className="bottom-event">
                        <p>Artist Line up</p>
                        <div className="card-images-event">
                            <img width={145} height={150} src={eventImageOne} />
                            <img width={192} height={198} src={eventImageTwo} />
                            <img width={145} height={150} src={eventImageThree} />
                        </div>
                    </div>
                )}
                <div style={{ marginTop: type == "event" ? "175px" : "84px" }} className="bottom-button">
                    <p>Join Waitlist</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
