// React
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/bootstrapstyles.css';
import libraryStyles from "./library.module.css";

// Images
import album from '../images/tamerhosny.jfif';

const Artists = () => {

    const artists = [
        {
            image: album,
            link: "tamerhosny"
        },
        {
            image: album,
            link: "tamerhosny"
        },
        {
            image: album,
            link: "tamerhosny"
        },
        {
            image: album,
            link: "tamerhosny"
        },
        {
            image: album,
            link: "tamerhosny"
        },
        {
            image: album,
            link: "tamerhosny"
        },
        {
            image: album,
            link: "tamerhosny"
        },
        {
            image: album,
            link: "tamerhosny"
        },
    ]

    return(
        <Fragment>

            <div className={`${libraryStyles.artistCardsContainer}`}>

                {/* Album Card */}
                {artists.map((data, index)=>{
                    return(
                        <div key={index} className={`${libraryStyles.artistContentContainer}`}>

                            <img src={data.image} className={`${libraryStyles.artistImageStyle}`}/>

                            <div className={`${libraryStyles.artistInformation}`}>
                                <Link to={"/artist/" + data.link} className={`${libraryStyles.goToArtistButton}`}>
                                    Go To Artist
                                </Link>
                            </div>

                        </div>
                    )
                })}

            </div>

        </Fragment>
    );
};

export default Artists;