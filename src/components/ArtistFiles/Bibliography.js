// React
import React, {Fragment, useState} from "react";

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/tablestyles.css';
import '../StyleSheets/bootstrapstyles.css';
import artistStyles from './artiststyle.module.css' ;

// Images
import artistBG from '../images/artistBG.jpg';
import artistPP from '../images/profileImage.jpg';

const Bibliography = (props) => {

    return(
        <Fragment>

            <div className={`${artistStyles.bibParagraph}`}>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries,
                but also the leap into  electronic typesetting, remaining 
                essentially unchanged.It was popularised in the 1960s with 
                the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus 
                PageMaker including versions of Lorem Ipsum.
            </div>

        </Fragment>
    )
}

export default Bibliography;