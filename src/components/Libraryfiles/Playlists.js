// React
import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/modalStyles.css';
import '../StyleSheets/bootstrapstyles.css';
import libraryStyles from "./library.module.css";

// Images
import album from '../images/tamerhosny.jfif';

// Icons
import { IoMdClose } from "react-icons/io";

// Modal
import Modal from "react-modal"

const Playlists = () => {

    const playlists = [
        {
            image: album,
            name: "Tamer Hosny",
            link: "artist/tamerhosny"
        },
        {
            image: album,
            name: "Tamer Hosny",
            link: "artist/tamerhosny"
        },
        {
            image: album,
            name: "Tamer Hosny",
            link: "artist/tamerhosny"
        },
        {
            image: album,
            name: "Tamer Hosny",
            link: "artist/tamerhosny"
        },
        {
            image: album,
            name: "Tamer Hosny",
            link: "artist/tamerhosny"
        },
        {
            image: album,
            name: "Tamer Hosny",
            link: "artist/tamerhosny"
        },
        {
            image: album,
            name: "Tamer Hosny",
            link: "artist/tamerhosny"
        },
        {
            image: album,
            name: "Tamer Hosny",
            link: "artist/tamerhosny"
        },
    ]

    // Modal
    const customStyles = {
        content: {
          top: '40%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          width:"800px",
          minHeight:"150px",
          borderWidth:"0px",
          borderRadius:"10px",
          backgroundColor: "#222222",
          boxShadow:"0px 0px 5px #000",
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
            background: "rgba(0,0,0,0.7)"
        }
    };

    const [showModal, setShowModal] = useState(false)

    return(
        <Fragment>

            <div className={`${libraryStyles.artistCardsContainer}`}>

                {/* Playlist Card */}
                {playlists.map((data, index)=>{
                    return(
                        <div key={index} className={`${libraryStyles.artistContentContainer}`}>

                            <img src={data.image} className={`${libraryStyles.artistImageStyle}`}/>

                            <div className={`${libraryStyles.artistInformation}`}>
                                <span>{data.name}</span>
                                <Link to={data.link} className={`${libraryStyles.goToArtistButton}`}>
                                    Go To Playlist
                                </Link>
                            </div>

                        </div>
                    )
                })}

            </div>

            <div className={`${libraryStyles.addPlayListButton}`}
                onClick={()=>setShowModal(true)}
            >
                <div className={"primaryButton"}>
                    Add Playlist
                </div>
            </div>

            <Modal
                isOpen={showModal}
                style={customStyles}
            >
                <div className={"modalMainContainer"}>
                
                    <div className={"modalTitleContainer"}>
                        <div className={"modalTitle"}>
                            Add Playlist
                        </div>
                        <div className={"closeButton"} 
                            onClick={()=>{
                                setShowModal(false)
                            }}
                        >
                            <IoMdClose/>
                        </div>
                    </div>

                    <hr className={"modalSeparator"}/>

                    <div className={"modalContentContainer"}>
                        <Fragment>
                            <div className={"row m-0 w-100 align-items-center justify-content-center"}>
                                <div className='col-lg-5 mb-3'>
                                    <label className={' input_label_name p-0 '} 
                                        style={{fontSize:"16px"}}
                                    >
                                        New Playlist
                                    </label>
                                    <input 
                                        type={"text"} 
                                        style={{ minWidth: '55px', height: '15px', marginTop:"5px" }} 
                                        className={' form_control '} 
                                        placeholder={"Enter name of playlist"}
                                    />
                                </div>
                            </div>
                            
                            <div className={"primaryButton mt-3"}>
                                Add
                            </div>

                        </Fragment>
                    </div>

                </div>
            </Modal>

        </Fragment>
    );
};

export default Playlists;