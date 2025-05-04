import React from 'react';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/cardStyles.css';
import '../StyleSheets/tablestyles.css';
import '../StyleSheets/bootstrapstyles.css';
import libraryStyles from'./library.module.css';

// Images
import album from '../images/tamerhosny.jfif';

// Icons
import { IoMdDownload } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const Downloads = () => {

    const downloadedMusic = [
        {
            image: album,
            albumName: "Ay 7aga",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "1000",
            type: "Song",
        },
        {
            image: album,
            albumName: "Ay 7aga 2",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "160",
            type: "Music",
        },
        {
            image: album,
            albumName: "Ay 7aga 3",
            songTitle: "Salamon Salmen Sam",
            artist: "Jessica Odell",
            price: "160",
            type: "Music",
        },
    ]

    return(
        <React.Fragment>

            {/* Music that was added to favorites */}
            {downloadedMusic.map((music,index)=>{
                return(
                    <tr key={index} className={" tableRow "}>
                        <td className={"pb-2 pt-2"}>
                            <div className={" tableContent "}>
                                <img src={music.image} className={" tableRowImage "}/>
                            </div>
                        </td>

                        <td>
                            <div className={" tableContent "}>
                                {music.songTitle}
                            </div>
                        </td>

                        <td>
                            <div className={" tableContent "}>
                                {music.artist}
                            </div>
                        </td>

                        <td>
                            <div className={" tableContent "}>
                                <span>EGP</span>
                                {music.price}
                            </div>
                        </td>

                        <td>
                            <div className={" tableContent "}>
                                {music.type == "Song" ? 
                                    <p className={' track_category pl-2 m-0 pr-2 bg-primary '}>Song</p>
                                    : 
                                    <p className={' track_category pl-2 m-0 pr-2 '}>Music</p>
                                }
                            </div>
                        </td>
                    </tr>
                )
            })}

        </React.Fragment>
    );
};

export default Downloads;