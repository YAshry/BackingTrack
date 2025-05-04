// React
import React, {Fragment, useState} from "react";

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/tablestyles.css';
import '../StyleSheets/bootstrapstyles.css';

// Icons
import { IoMdDownload } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const Singles = (props) => {

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

    const singlesList = [
        {
            id:1,
            songName: "Whatever",
            album: "Rando",
            type:"song",
            price:50,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:2,
            songName: "Whatever",
            album: "Rando",
            type:"music",
            price:60,
            downloaded:true,
            productionDate:"08/12/2024"
        },
        {
            id:3,
            songName: "Whatever",
            album: "Rando",
            type:"music",
            price:70,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            album: "Rando",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            album: "Rando",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            album: "Rando",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
        {
            id:4,
            songName: "Whatever",
            album: "Rando",
            type:"song",
            price:80,
            downloaded:false,
            productionDate:"08/12/2024"
        },
    ]

    return(
        <Fragment>

            {/* Artist Singles */}
            <table 
                style={{
                    width:"90%",
                    padding:"0px 0px 40px 0px",
                }}
            >

                {/* Table Header */}
                <tr className={" tableHeader "} style={{textAlign:"center",}}>
                    {tableTitle.map((data,index)=>{
                        return(
                            <th style={{paddingBottom:"20px"}}>
                                {data.titleName}
                            </th>
                        )
                    })}
                </tr>

                {/* Table Content */}
                {singlesList.map((music, index)=>{
                    return(
                        <tr key={index} className={" tableRow "}>
                            <td className={"pb-3 pt-3"}>
                                <div className={" tableContent "}>
                                    {music.songName}
                                </div>
                            </td>

                            <td>
                                <div className={" tableContent "}>
                                    {music.album}
                                </div>
                            </td>

                            <td>
                                <div className={" tableContent "}>
                                    {music.type == "song" ? 
                                        <p className={' track_category pl-2 m-0 pr-2 bg-primary '}>Song</p>
                                        : 
                                        <p className={' track_category pl-2 m-0 pr-2 '}>Music</p>
                                    }
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
                                <div className={" tableContent "}>
                                    {music.productionDate}
                                </div>
                            </td>
                            
                        </tr>
                    )
                })}
            
            </table>

        </Fragment>
    )
}

export default Singles;