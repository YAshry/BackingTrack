// React
import React, {Fragment, useState} from "react"
import {Link} from "react-router-dom"

// Styles
import albumStyles from "./albumstyles.module.css"

// Images
import albumImage from "../images/tamerhosny.jfif"

// Icons
import { TiTick } from "react-icons/ti";
import { IoMdDownload } from "react-icons/io";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const Album = (props) => {

    const tableTitle = [
        {
            titleName: "Song Name"
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
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:2,
            songName: "Whatever",
            type:"music",
            price:60,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:3,
            songName: "Whatever",
            type:"music",
            price:70,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
    ]

    return(
        <Fragment>
            <Link to={"/artist/albums"} className={`${albumStyles.backButton}` + " primaryButton "}>
                <FaLongArrowAltLeft/> Go Back 
            </Link>
            <div className={`${albumStyles.sectionOneContainer}`}>

                <div className={`${albumStyles.albumInformationContainer}`}>
                    <div className={`${albumStyles.imageContainer}`}>
                        <img src={albumImage} />
                    </div>
                    <span>
                        Album Name
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

export default Album;