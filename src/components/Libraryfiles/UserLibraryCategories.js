// React
import React, { Fragment, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Components
import NoInformation from "../NoInformationFiles/NoInformation";

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/tablestyles.css';
import '../StyleSheets/bootstrapstyles.css';
import libraryStyles from './library.module.css';

//Images and Icons
import {MdFavorite} from 'react-icons/md';
import {IoIosAlbums} from 'react-icons/io';
import {GiCloudDownload} from 'react-icons/gi';
import {RiMoneyDollarCircleFill, RiBubbleChartFill} from 'react-icons/ri';

const UserLibraryCategories = () => {

    const categoryTitlesArray = 
    [
        {
            link: "likes",
            icon: MdFavorite,
            title: "Likes"
        },

        {
            link: "purchased",
            icon: RiMoneyDollarCircleFill,
            title: "Purchased Items"
        },

        {
            link: "downloads",
            icon: GiCloudDownload,
            title: "Downloads"
        },

        {
            link: "artists",
            icon: RiBubbleChartFill,
            title: "Artists"
        },

        {
            link: "playlists",
            icon: IoIosAlbums,
            title: "Playlists"
        },

    ]

    const musicDetailsTitleArray = [
        {
            title: "Album"
        },
        {
            title: "Song Title"
        },
        {
            title: "Artist"
        },
        {
            type:"purchased",
            title: "Price"
        },
        {
            type:"downloaded",
            title: "Downloaded"
        },
        {
            title: "Type"
        },
    ]

    const [currentCategory, setCurrentCategory] = useState("Likes");

    return(
        <div className={'row w-100 m-0 mt-3 mb-3 '}>

            <div className={'col-lg-2 p-0 '} >

                <div className={`${libraryStyles.categoriesContainer}`}>

                    <div className={`${libraryStyles.categoryTitle}` + ' mb-3 pt-3 pb-3 '}>
                        Your Library
                    </div>

                    {categoryTitlesArray.map((cat,index)=>{
                        var Icons = cat.icon
                        return(
                            <NavLink key={index} to={"/library/" + cat.link} className={`${libraryStyles.categoryButton}` + ' mt-3 mb-3 pt-2 pb-2 buttonLink '} 
                                onClick={()=>{
                                    setCurrentCategory(cat.title)
                                }}
                            >
                                <div className={`${libraryStyles.categoryIcon}`}>
                                    <Icons size={25}/>
                                </div>
                                {cat.title}
                            </NavLink>
                        )
                    })}

                </div>

            </div>

            <div className={`${libraryStyles.rightLibrarySection}` + ' col-lg-10 p-0 '}>
                
                <table 
                    style={{
                        width:"100%",
                        padding: currentCategory != "Artists" && currentCategory != "" && currentCategory != "Playlists"  && "30px 0px",
                    }}
                >
                    
                    {currentCategory == "Artists" || currentCategory == "Playlists" || currentCategory == "" ?
                        <Fragment/>
                        :
                        <tr className={" tableHeader "} style={{textAlign:"center"}}>
                            {musicDetailsTitleArray.map((mDetailTitle,index)=>
                                currentCategory == "Downloads" && mDetailTitle.type=="downloaded" ?
                                <Fragment/>
                                :
                                currentCategory == "Purchased Items" && mDetailTitle.type=="purchased" ?
                                <Fragment/>
                                :
                                <th key={index} className={"pb-4"}>
                                    {mDetailTitle.title}
                                </th>
                            )} 
                        </tr>
                        
                    }
                    <Outlet/>

                </table>

                <div className='row m-0 w-100 align-items-center justify-content-center'>
                    <NoInformation
                        currentCategory 
                        text={
                            currentCategory == "Likes" ? "No Music Added Yet" 
                            : 
                            currentCategory == "Purchased Items" ? "No Music Purchased Yet"
                            :
                            currentCategory == "Downloads" ? "No Music Downloaded Yet"
                            :
                            currentCategory == "Artists" ? "No Artists Added Yet"
                            :
                            currentCategory == "Playlists" && "No Playlists Created Yet"
                        }
                        style={{paddingTop: currentCategory == "Artists" || currentCategory == "Playlists" ?  "100px" : "0px"}}
                        showButton={currentCategory == "Playlists" ? true : false}
                        buttonText={currentCategory == "Playlists" ? "Create New Playlist ?" : " "}  
                    />
                </div>
                
            </div>
            
        </div>
    );
};

export default UserLibraryCategories;