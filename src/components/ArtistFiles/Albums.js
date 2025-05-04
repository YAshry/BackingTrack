// React
import React, {Fragment, useState} from "react";
import {Link} from 'react-router-dom';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/tablestyles.css';
import '../StyleSheets/bootstrapstyles.css';
import artistStyles from './artiststyle.module.css' ;

// Images
import albumImage from '../images/tamerhosny.jfif';

const Albums = (props) => {

    const albums = [
        {
            image:albumImage,
            link:"album1",
        },
        {
            image:albumImage,
            link:"album2",
        },
        {
            image:albumImage,
            link:"album3",
        },
        {
            image:albumImage,
            link:"album4",
        },
        {
            image:albumImage,
            link:"album5",
        },
        {
            image:albumImage,
            link:"album6",
        },
        {
            image:albumImage,
            link:"album7",
        },
        {
            image:albumImage,
            link:"album8",
        },
    ]

    return(
        <Fragment>

            <div className={`${artistStyles.artistAlbumsCardsContainer}`}>

                {albums.map((data,index)=>{
                    return(
                        <Fragment key={index}>
                            <div className={`${artistStyles.albumCardContainer}`}>
                                <div className={`${artistStyles.albumImageContainer}`}>
                                    <img src={data.image}/>
                                </div>

                                <div className={`${artistStyles.albumNameContainer}`}>
                                    <Link to={"/album/"+data.link}>Go To Album</Link>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}

            </div>

        </Fragment>
    )
}

export default Albums;