// React
import React, {Fragment, useState} from "react";
import { NavLink, Outlet, Link } from 'react-router-dom';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/tablestyles.css';
import '../StyleSheets/bootstrapstyles.css';
import artistStyles from './artiststyle.module.css' ;

// Images
import artistBG from '../images/artistBG.jpg';
import artistPP from '../images/profileImage.jpg';

// Icons
import { FaLongArrowAltLeft } from "react-icons/fa";

const Artist = (props) => {
    
    const categories = [
        {
            link:"bibliography",
            title:"Bibliography"
        },
        {
            link:"albums",
            title:"Albums"
        },
        {
            link:"singles",
            title:"Singles"
        }
    ]

    return(
        <Fragment>

            {/* Profile Images */}
            <div className={`${artistStyles.profileImagesContainer}`}>
                <div className={`${artistStyles.artistBackgroundImage}`}>
                    <img src={artistBG}/>
                </div>
                <div className={`${artistStyles.artistProfileImage}`}>
                    <img src={artistPP}/>
                </div>
                <Link to={"/home"} className={`${artistStyles.homeButton}` + " primaryButton "}>
                    <FaLongArrowAltLeft/> Go Back
                </Link>
            </div>

            {/* Categories */}
            <div className={`${artistStyles.ContentMainContainer}`}>

                <div className={`${artistStyles.categoriesContainer}`}>

                    {categories.map((data,index)=>{
                        return(
                            <NavLink key={index} to={"/artist/" + data.link} className={`${artistStyles.categoryTitle}`}>
                                <div>{data.title}</div>
                            </NavLink>
                        )
                    })}

                </div>

                <div className={`${artistStyles.categoriesContentContainer}`}>

                    <Outlet/>

                </div>

            </div>

        </Fragment>
    )
}

export default Artist;