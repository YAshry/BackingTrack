import React from 'react';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/cardStyles.css';
import '../StyleSheets/tablestyles.css';
import '../StyleSheets/bootstrapstyles.css';

// Images
import album from '../images/tamerhosny.jfif';

// Icons
import { IoMdDownload } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const Purchased = () => {

    const purchasedMusic = [
        {
            image: album,
            albumName: "Album 11",
            songTitle: "This World",
            artist: "Breaking The Boundaries",
            type:"music",
            downloaded: true,
        },
        {
            image: album,
            albumName: "Album 11",
            songTitle: "Ouly",
            artist: "Ahmed Kamel",
            type:"song",
            downloaded: false,
        },
        {
            image: album,
            albumName: "Album 11",
            songTitle: "Sokan El-Leil",
            artist: "El-Joker",
            type:"song",
            downloaded: true,
        },
    ]

    return(
        <React.Fragment>

            {/* Music that was added to favorites */}
            {purchasedMusic.map((music,index)=>{
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
                                {music.downloaded == true ? 
                                    <span className={" downloadedTrue downloaded "}>
                                        <TiTick/>
                                    </span>
                                    : 
                                    <span className={" downloadedFalse downloaded "}>
                                        <IoMdDownload/>
                                    </span>
                                }
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

export default Purchased;