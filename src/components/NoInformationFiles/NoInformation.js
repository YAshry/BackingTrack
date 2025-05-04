// React
import React, {Fragment, useState} from 'react';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/cardStyles.css';
import '../StyleSheets/modalStyles.css';
import '../StyleSheets/bootstrapstyles.css';
import noInfoStyles from './noInformation.module.css';

// Icons
import { IoMdClose } from "react-icons/io";
import { GiMusicalNotes } from "react-icons/gi";

// Modal
import Modal from "react-modal"

const NoInformation = (props) => {
    
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

    const addPlaylistInput = [
        {
            labelName: "Playlist Name",
            type: "text",
            placeholder:"playlist name"
        },
    ]
    
    return(
        <Fragment>
            
            <div className={`${noInfoStyles.contentContainer}`} style={props.style}>

                <GiMusicalNotes size={100}/>
                
                {props.text}

                {props.showButton &&
                    <div className={"primaryButton"} style={{fontSize:"20px"}}
                        onClick={()=>{
                            setShowModal(true)
                        }}
                    >
                        {props.buttonText}
                    </div>
                }
            
            </div>

            <Modal
                isOpen={showModal}
                style={customStyles}
            >
                <div className={"modalMainContainer"}>
                
                    <div className={"modalTitleContainer"}>
                        <div className={"modalTitle"}>
                            Add New Playlist
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
                                {addPlaylistInput.map((data, index)=>{
                                    return(
                                        <div key={index} className='col-lg-5 mb-3'>
                                            <label className={' input_label_name p-0 '} 
                                                style={{fontSize:"16px"}}
                                            >
                                                {data.labelName}
                                            </label>
                                            <input 
                                                type={data.type} 
                                                style={{ minWidth: '55px', height: '15px', marginTop:"5px" }} 
                                                className={' form_control '} 
                                                placeholder={data.placeholder}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={"primaryButton mt-4"}>
                                Add Playlist
                            </div>
                        </Fragment>
                    </div>

                </div>
            </Modal>

        </Fragment>
    )
}

export default NoInformation;