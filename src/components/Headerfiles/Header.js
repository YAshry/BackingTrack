// React
import React from 'react';
import {NavLink} from 'react-router-dom';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/bootstrapstyles.css';
import header_styles from './header.module.css';

//Images and Icons
import smlogo from '../images/bticon.png';
import profile_photo from '../images/profileImage.jpg';
import {AiFillHome} from 'react-icons/ai';
import {GiGuitar} from 'react-icons/gi';
import {BsFillMicFill} from 'react-icons/bs';
import {MdLibraryMusic} from 'react-icons/md';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {IoMdCart} from 'react-icons/io';

const Header = () => {

    const headerDropdowns = [
        {
            headerItemIcon: GiGuitar,
            headerItemName: "Instrumental Backing Track",
            link1:"/instrumental/arabic",
            link2:"/instrumental/international",
            headerSubItem1Name: "Arabic",
            headerSubItem2Name: "International",
        },
        {
            headerItemIcon: BsFillMicFill,
            headerItemName: "Vocal Backing Track",
            link1:"/vocal/arabic",
            link2:"/vocal/international",
            headerSubItem1Name: "Arabic",
            headerSubItem2Name: "International",
        },
    ]

    return(
        <div>

            {/* Normal Header */}
            <div className={ `${header_styles.header}` + ' row m-0 pt-2 pb-2 pl-3 pr-3'}>
                
                {/* Logo/ */}
                <div className='col-lg-3 p-0 pt-1'>  
                    <div className={'row m-0 align-items-center'}>
                        <p className={`${header_styles.title}` + ' m-0 '}><span>SM</span></p>
                        <div className={`${header_styles.logo}` + ' pl-1 ' }>
                            <img src={smlogo} alt="test.png"/>
                        </div>
                        <p className={`${header_styles.title}` + ' m-0 ' }>Backing Track</p>
                    </div>
                </div>

                {/* Page Name */}
                <div className='col-lg-6 p-0 pt-1'>
                    <div className={`${header_styles.header_title_list}` + ' row m-0 h-100'}>

                        <NavLink to='/home' className={`${header_styles.header_title_container}` + ' header_title_container '}>
                            <div className={`${header_styles.header_icon}` + " icon "}>
                                <AiFillHome/>
                            </div>
                            <p className={`${header_styles.header_page_title}` + ' m-0 title '}>Home</p>
                        </NavLink>

                        {headerDropdowns.map((data, index)=>{
                            return(
                                <div key={index} className={`${header_styles.header_dropdown}`}>
                                    <div className={`${header_styles.header_title_container}` + ' pointer '}>
                                        <div className={`${header_styles.header_icon}`}>
                                            <data.headerItemIcon/>
                                        </div>
                                        <p className={`${header_styles.header_page_title}` + ' m-0 '}>{data.headerItemName}</p>
                                    </div>
                                    <div className={`${header_styles.header_dropdown_content}` + ' ml-4 '}>
                                        <NavLink to={data.link1} className={'header_title_container'} style={{borderBottomStyle:'solid'}}>
                                            <p className="m-0 title">{data.headerSubItem1Name}</p>
                                        </NavLink>
                                        <NavLink to={data.link2} className={'header_title_container'}>
                                            <p className="m-0 title">{data.headerSubItem2Name}</p>
                                        </NavLink>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    
                </div>

                {/* library/ Cart/ Profile Picture/ username/ elipsis */}
                <div className='col-lg-3 p-0 pt-1'>
                    <div className='row m-0 align-items-center justify-content-end'>
                        
                        <NavLink to={"/library/likes"} className={`${header_styles.header_icon} ${header_styles.tooltip}` + ' mr-2 pointer header_title_container '}>
                            <MdLibraryMusic size={20} className='icon'/>
                            <span className={`${header_styles.tooltiptext}`}>My Items</span>
                        </NavLink>

                        <NavLink to="/cart" className={`${header_styles.header_icon} ${header_styles.tooltip}` + ' mr-3 pointer header_title_container '}>
                            <IoMdCart size={20} className='icon'/>
                            <span className={`${header_styles.tooltiptext}`}>Cart</span>
                        </NavLink>

                        <p className={`${header_styles.username}` + ' m-0 '}>Yasmine Amr EL-Ashry</p>
                        <NavLink to="/profile" className={`${header_styles.profile_image}`+ ' ml-3 mr-2 '}
                            
                        >
                            <img src={profile_photo} alt="test.png"/>
                        </NavLink>
                        <div className={`${header_styles.header_dropdown}`}>
                            <div className={`${header_styles.header_icon}` + ' pointer mr-0 '}>
                                <BsThreeDotsVertical/>
                            </div> 
                            <div className={`${header_styles.header_dropdown_content}`} style={{right:'0',paddingTop:'10px',minWidth:'140px'}}>
                                <NavLink to='/settings' className={"header_title_container"} style={{borderBottomStyle:'solid'}}>
                                    <p className="m-0 title">Settings</p>
                                </NavLink>
                                <NavLink to='/login' className={"header_title_container"}>
                                    <p className="m-0 title">Log Out</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Responsive Header */}

        </div>
    );
};

export default Header;