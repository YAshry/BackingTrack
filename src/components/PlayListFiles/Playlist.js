// React
import React, {Fragment, useState} from "react"
import {Link} from "react-router-dom"

// Styles
import playlistStyles from "./playliststyles.module.css"

// Images
import playlistImage from "../images/tamerhosny.jfif"

// Icons
import { TiTick } from "react-icons/ti";
import { IoMdDownload } from "react-icons/io";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const Playlist = (props) => {

    const tableTitle = [
        {
            titleName: "Song Name"
        },
        {
            titleName: "Album"
        },
        {
            titleName: "Type"
        },
        {
            titleName: "Price"
        },
        {
            titleName: "Downloaded"
        },
        {
            titleName: "Production Date"
        }
    ]

    const musicList = [
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:1,
            songName: "Whatever",
            album: "album",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },  
    ]

    return(
        <Fragment>
            <Link to={"/library"} className={`${playlistStyles.backButton}` + " primaryButton "}>
                <FaLongArrowAltLeft/> Go Back 
            </Link>
            <div className={`${playlistStyles.sectionOneContainer}`}>

                <div className={`${playlistStyles.playlistInformationContainer}`}>
                    <div className={`${playlistStyles.imageContainer}`}>
                        <img src={playlistImage} />
                    </div>
                    <span>
                        Playlist Name
                    </span>
                </div>
                
                <table 
                    style={{
                        width:"80%",
                        padding:"0px 0px 40px 0px",
                    }}
                >

                    {/* Table Header */}
                    <tr className={" tableHeader "} style={{textAlign:"center",fontSize:"17px"}}>
                        {tableTitle.map((data,index)=>{
                            return(
                                <th style={{paddingBottom:"20px"}}>
                                    {data.titleName}
                                </th>
                            )
                        })}
                    </tr>

                    {/* Table Content */}
                    {musicList.map((music, index)=>{
                        return(
                            <tr key={index} className={" tableRow "}>
                                <td className={"pb-3 pt-3"}>
                                    <div className={" tableContent "} style={{fontSize:"16px"}}>
                                        {music.songName}
                                    </div>
                                </td>

                                <td>
                                    <div className={" tableContent "} style={{fontSize:"16px"}}>
                                        {music.album}
                                    </div>
                                </td>

                                <td>
                                    <div className={" tableContent "} style={{fontSize:"16px"}}>
                                        {music.type == "song" ? 
                                            <p className={' track_category pl-2 m-0 pr-2 bg-primary '}>Song</p>
                                            : 
                                            <p className={' track_category pl-2 m-0 pr-2 '}>Music</p>
                                        }
                                    </div>
                                </td>

                                <td>
                                    <div className={" tableContent "} style={{fontSize:"16px"}}>
                                        {music.price != "Purchased" && <span>EGP</span>}
                                        {music.price}
                                    </div>
                                </td>

                                <td>
                                    <div className={" tableContent "} style={{fontSize:"16px"}}>
                                        {music.downloaded ? 
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
                                    <div className={" tableContent "} style={{fontSize:"16px"}}>
                                        {music.productionDate}
                                    </div>
                                </td>
                                
                            </tr>
                        )
                    })}
                
                </table>

            </div>

        </Fragment>
    )
}

export default Playlist;