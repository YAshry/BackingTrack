import React, {Fragment, useState} from 'react';
import Select from 'react-select';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/bootstrapstyles.css';
import ia_styles from './../StyleSheets/generalCategories.module.css';

// images
import us_flag from './flags/us.png';
import eg_flag from './flags/eg.png';

// Icons
import {FiSettings} from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";

// Modal
import Modal from "react-modal"

// Select Style
const languageSelectStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ?  '#ccc' : '#f7f5f4',
        textTransform: 'capitalize',
        padding:'10px',
        boxShadow: '0px 0px 5px black',
        color: state.isSelected ? '#96331d' : '#022648',
        fontSize: '15px',
        transition: '.3s',
        '&:hover': {
            color: '#96331d',
            cursor: 'pointer',
            backgroundColor:'#ccc',
        },
    }),
    control: (state) => ({
        borderBottom: 'solid #b8b8b8',
        backgroundColor:'#343434',
        display: 'flex',
        cursor: 'pointer',
        transition: '.3s',
        '&:hover': {
            boxShadow: '0px 8px 5px black',
        },
    }),
    placeholder: (provided, state) => ({
        ...provided,
        fontSize: '15px',
    }),
    singleValue: provided => ({
        ...provided,
        color: '#ccc'
    }),
};

const Settings = () => {

    const languageOptions = [
        {   
            label:  <div className="d-flex align-items-center">
                        <img className='pr-1' src={us_flag} alt="test.png"/>English
                    </div> , 
            value: 1 
        },
        {   label:  <div className="d-flex align-items-center">
                        <img className='pr-1' src={eg_flag} alt="test.png"/>Arabic
                    </div> , 
            value: 2 
        },
    ];

    const inputs = [
        {
            labelName: "user name",
            placeholder: "Your UserName",
            type:"text",
        },
        {
            labelName: "first name",
            placeholder: "Your First Name",
            type:"text",
        },
        {
            labelName: "last name",
            placeholder: "Your Last Name",
            type:"text",
        },
        {
            labelName: "email",
            placeholder: "Your Email",
            type:"email",
        },
        {
            labelName: "new email",
            placeholder: "Write Your New Email",
            type:"email",
        },
        {
            labelName: "password",
            placeholder: "********",
            type:"password",
        },
        {
            labelName: "new password",
            placeholder: "Write Your New Password",
            type:"password",
        }
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
            <div className='mb-6'>

                {/* Title / Order By */}
                <div className={`${ia_styles.main_page_title_container}` + " row m-0 m-4 pb-2 "} style={{width:'148px'}}>
                    <div className={' row m-0 align-items-center pr-3'}>
                        <div className={`${ia_styles.main_page_title_icon}` + ' mr-2 '}>
                            <FiSettings/>
                        </div>
                        <p className={`${ia_styles.main_page_title}` + ' m-0 '}>Settings</p>
                    </div>
                </div>

                <div className={'row m-0 w-100 align-items-center justify-content-center'} style={{gap:"20px"}}>
                    
                    {/* Language Drop Down */}
                    <div className='col-lg-5'>
                        <label className={' input_label_name col-lg-12 p-0 '}>
                            language
                        </label>
                        <div className='mt-2'>
                            <Select
                                options={languageOptions}
                                styles={languageSelectStyles}
                                isSearchable={false}
                                placeholder={'Choose Language'}
                            />
                        </div>
                    </div>

                    {/* Input Fields */}
                    {inputs.map((data, index)=>{
                        return(
                            <div key={index} className='col-lg-5 mb-3'>
                                <label className={' input_label_name p-0 '}>{data.labelName}</label>
                                <input 
                                    type={data.type} 
                                    style={{ minWidth: '55px', height: '15px' }} 
                                    className={' form_control '} 
                                    placeholder={data.placeholder}
                                />
                            </div>
                        )
                    })}
                </div>

                <div className='row w-100 align-items-center justify-content-center mt-4'>
                    <div className={" primaryButton "}>
                        Save
                    </div>
                    <div className={" primaryButton ml-2 "}
                        onClick={()=>{
                            setShowModal(true)
                        }}
                    >
                        Delete Account
                    </div>
                </div>

            </div>
        
            <Modal
                isOpen={showModal}
                style={customStyles}
            >
                <div className={"modalMainContainer"}>
                
                    <div className={"modalTitleContainer"}>
                        <div className={"modalTitle"}>
                            Delete Account
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
                            <p style={{color:"#c0a33f"}}>* Are you sure you want to delete your account ? *</p>
                            <p style={{marginTop:"10px"}}>
                                Proceeding will delete your account information, user playlists, downloads, and likes
                            </p>
                            <div className={"row m-0 w-100 align-items-center justify-content-center"}>
                                <div className={"primaryButton mt-4"}>
                                    Delete
                                </div>
                                <div className={"secondaryButton mt-4 ml-2"}
                                    onClick={()=>{
                                        setShowModal(false)
                                    }}
                                >
                                    Cancel
                                </div>
                            </div>
                    </div>

                </div>
            </Modal>

        </Fragment>
    );
};

export default Settings;