// React
import React, {Fragment} from 'react';

// Components
import NoInformation from "../NoInformationFiles/NoInformation";

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

const Likes = () => {

    const likedMusic = [
        {
            image: album,
            albumName: "Ay 7aga",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "Purchased",
            type: "Song",
            downloaded: true,
        },
        {
            image: album,
            albumName: "Ay 7aga",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "Purchased",
            type: "Song",
            downloaded: true,
        },
        {
            image: album,
            albumName: "Ay 7aga",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "Purchased",
            type: "Song",
            downloaded: true,
        },
        {
            image: album,
            albumName: "Ay 7aga",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "Purchased",
            type: "Song",
            downloaded: true,
        },
        {
            image: album,
            albumName: "Ay 7aga",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "Purchased",
            type: "Song",
            downloaded: true,
        },
        {
            image: album,
            albumName: "Ay 7aga",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "Purchased",
            type: "Song",
            downloaded: true,
        },
        {
            image: album,
            albumName: "Ay 7aga",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "Purchased",
            type: "Song",
            downloaded: true,
        },
        {
            image: album,
            albumName: "Ay 7aga 2",
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "160",
            type: "Music",
            downloaded: true,
        },
        {
            image: album,
            albumName: "Ay 7aga 3",
            songTitle: "Salamon Salmen Sam",
            artist: "Jessica Odell",
            price: "160",
            type: "Music",
            downloaded: false,
        },
    ]

    return(
        <Fragment>
            
            {/* Music that was added to favorites */}
            {likedMusic.map((music, index)=>{
                return(
                    <tr key={index} className={" tableRow "}>
                        <td className={"pb-2 pt-2"}>
                            <div className={" tableContent "}>
                                <img src={music.image} className={" tableRowImage "}/>
                                <span className={"ml-1 word-break1"}>{music.albumName}</span>
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
                                {music.price != "Purchased" && <span>EGP</span>}
                                {music.price}
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

        </Fragment>
    );
};

export default Likes;