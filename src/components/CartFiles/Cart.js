// React
import React, {Fragment, useState} from 'react';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/modalStyles.css';
import '../StyleSheets/tablestyles.css';
import '../StyleSheets/bootstrapstyles.css';
import cartStyles from './cart.module.css';

// Images
import etisalat from "../images/etisalat.png"
import vodafone from "../images/vodafone.png"

// Icons
import { IoMdClose } from "react-icons/io";
import { SiMusicbrainz } from "react-icons/si";
import { MdDeleteForever, MdOutlinePayments, MdContacts } from "react-icons/md";

// Modal
import Modal from "react-modal"

const Cart = () => {

    const trackTableHeader = [
        {
            title:"Track Name",
        },
        {
            title:"Artist",
        },
        {
            title:"Type",
        },
        {
            title:"Price",
        }
    ]

    const tracks = [
        {
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "160",
            type: "Song",
        },
        {
            songTitle: "3eesh Besho2ak",
            artist: "Tamer Hosny",
            price: "160",
            type: "Music",
        },
        {
            songTitle: "Salamon Salmen Sam",
            artist: "Jessica Odell",
            price: "160",
            type: "Music",
        }
    ]

    const paymentOptions = [
        {
            name:"Mobile Services",
        },
        {
            name:"Bank Card"
        },
        {
            name:"InstaPay"
        },
        {
            name:"ValU"
        }
    ]

    const [paymentMethodModal, setPaymentMethodModal] = useState(false)
    const [showPhoneServicesInput, setShowPhoneServicesInput] = useState(false)
    const [phoneServicesOption, setPhoneServicesOption] = useState("")
    const [currentSelectedOption, setCurrentSelectedOption] = useState("")

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

    const inputs = [
        {
            labelName: "card holder name",
            placeholder: "card holder name",
            type:"text",
        },
        {
            labelName: "card number",
            placeholder: "card number",
            type:"text",
        },
        {
            labelName: "expiry date",
            placeholder: "MM/YY",
            type:"text",
        },
        {
            labelName: "CVV",
            placeholder: "",
            type:"password",
        },
    ]

    const contactInputs = [
        {
            labelName: "username",
            placeholder: "enter new username",
            type:"text",
        },
        {
            labelName: "email",
            placeholder: "enter new email",
            type:"text",
        },
        {
            labelName: "phone number",
            placeholder: "enter phone number",
            type:"text",
        },
    ]

    return(
        <Fragment>

            {/* Main Container */}
            <div className={`${cartStyles.cartContainer}`}>

                {/* Content Container */}
                <div className={`${cartStyles.cartContentContainer}`}>

                    {/* Tracks Information */}
                    <div className={`${cartStyles.tracksContainer}`}>
                        
                        {/* Section Title */}
                        <div className={`${cartStyles.containerTitle}`}>
                            <div className={`${cartStyles.icon}`}>
                                <SiMusicbrainz/>
                            </div>
                            Tracks To Buy
                        </div>

                        <table style={{width:"100%", padding:"10px 0px"}}>
                    
                            <tr className={" tableHeader "} style={{textAlign:"center"}}>
                                {trackTableHeader.map((data,index)=>{
                                    return(
                                        <th key={index} className={"pb-3"}>
                                            {data.title}
                                        </th>
                                    )
                                })}
                            </tr>

                            {tracks.map((music, index)=>{
                                return(
                                    <tr key={index} className={" tableRow  "}>
                                        <td>
                                            <div className={" tableContent "}>
                                                {music.songTitle}
                                            </div>
                                        </td>

                                        <td>
                                            <div className={" tableContent "}>
                                                {music.artist}
                                            </div>
                                        </td>

                                        <td>
                                            <div className={" tableContent "}>
                                                {music.type == "Song" ? 
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
                                            <div className={" tableContent "} style={{padding:"10px 0px"}}>
                                                <span className={" downloadedFalse downloaded "}>
                                                    <MdDeleteForever/>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}

                        </table>

                        <div className={`${cartStyles.contentInnerButton} ${cartStyles.contentInnerButton2}`}>
                            Add Track
                        </div>

                    </div>

                    {/* Contact and Payment Information */}
                    <div className={`${cartStyles.contactInfoPaymentContainer}`}>

                        {/* Contact Information */}
                        <div className={`${cartStyles.contactInfoContainer}`}>
                            
                            {/* Section Title */}
                            <div className={`${cartStyles.containerTitle}`}>
                                <div className={`${cartStyles.icon}`}>
                                    <MdContacts/>
                                </div>
                                Contact Information
                            </div>

                            <div className={`${cartStyles.contactInformationContainer}`}>
                                <div>
                                    <span>UserName:</span>
                                    Yasmine
                                </div>
                                <div>
                                    <span>Email:</span>
                                    Yaelashry99@gmail.com
                                </div>
                                <div>
                                    <span>Phone Number:</span>
                                    01022258452
                                </div>
                            </div>

                            <div className={`${cartStyles.contentInnerButton}`} 
                                onClick={()=>{
                                    setPaymentMethodModal(true)
                                    setCurrentSelectedOption("editContact")
                                }}
                            >
                                Edit Contact
                            </div>

                        </div>

                        {/* Payment Information */}
                        <div className={`${cartStyles.paymentContainer}`}>
                            
                            {/* Section Title */}
                            <div className={`${cartStyles.containerTitle}`}>
                                <div className={`${cartStyles.icon}`}>
                                    <MdOutlinePayments/>
                                </div>
                                Payment Method
                            </div>

                            {/* Payment Content Information */}
                            <div className={`${cartStyles.paymentContentContainer}`}>

                                <div className={`${cartStyles.paymentMethod}`}>
                                    {paymentOptions.map((data,index)=>{
                                        return(
                                            <div key={index} className={`${cartStyles.paymentOption}`} 
                                                onClick={()=>{
                                                    setPaymentMethodModal(true)
                                                    setCurrentSelectedOption(data.name)
                                                }}
                                            >
                                                {data.name}
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className={`${cartStyles.paymentPrice}`}>
                                    <div>Total Price:</div>
                                    <span>EGP</span>100
                                </div>

                            </div>

                        </div>

                        {/* Buttons Container */}
                        <div className={`${cartStyles.cartButtonsContainer}`}>

                            <div className={`${cartStyles.cartButton}`}>
                                Checkout
                            </div>

                            <div className={`${cartStyles.cartButton} ${cartStyles.cartCancelButton}`}>
                                Cancel
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Modal
                isOpen={paymentMethodModal}
                style={customStyles}
            >
                <div className={"modalMainContainer"}>
                
                    <div className={"modalTitleContainer"}>
                        <div className={"modalTitle"}>
                            {currentSelectedOption == "Mobile Services" ?
                                "Mobile Services"
                                :
                                currentSelectedOption == "Bank Card" ?
                                "Bank Card"
                                :
                                currentSelectedOption == "InstaPay" ?
                                "InstaPay"
                                :
                                currentSelectedOption == "ValU" ?
                                "ValU"
                                :
                                currentSelectedOption == "editContact" &&
                                "Edit Contact"
                            }
                        </div>
                        <div className={"closeButton"} 
                            onClick={()=>{
                                setPaymentMethodModal(false)
                                setShowPhoneServicesInput(false)
                            }}
                        >
                            <IoMdClose/>
                        </div>
                    </div>

                    <hr className={"modalSeparator"}/>

                    <div className={"modalContentContainer"}>
                        {currentSelectedOption == "editContact" ?
                            <Fragment>
                                <div className={"row m-0 w-100 align-items-center justify-content-start"}>
                                    {contactInputs.map((data, index)=>{
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
                                
                                <div className={"primaryButton mt-3"}>
                                    Edit
                                </div>

                            </Fragment>
                            :
                            currentSelectedOption == "Mobile Services" ?
                            <Fragment>
                                <div className={`${cartStyles.modalCardContainer}`}>
                                    <div className={`${cartStyles.modalCard}`} 
                                        onClick={()=>{
                                            setShowPhoneServicesInput(true)
                                            setPhoneServicesOption("etisalat")
                                        }}
                                    >
                                        <img src={etisalat}/>
                                    </div>
                                    <div className={`${cartStyles.modalCard}`} 
                                        onClick={()=>{
                                            setShowPhoneServicesInput(true)
                                            setPhoneServicesOption("vodafone")
                                        }}
                                    >
                                        <img src={vodafone}/>
                                    </div>
                                </div>
                                {showPhoneServicesInput && 
                                    <div className={`${cartStyles.servicesInput}`}>
                                        <input 
                                            type="text" 
                                            style={{ minWidth: '55px', height: '15px' }} 
                                            className={' form_control '} 
                                            placeholder={"Please provide your " + phoneServicesOption + " number"}
                                        />   
                                    </div>
                                }
                                <div className={"primaryButton mt-4"}>
                                    Add Number
                                </div>
                            </Fragment>
                            :
                            currentSelectedOption == "Bank Card" ?
                            <Fragment>
                                <div className={"row m-0 w-100 align-items-center justify-content-center"}>
                                    {inputs.map((data, index)=>{
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
                                    Add Card
                                </div>
                            </Fragment>
                            :
                            (currentSelectedOption == "InstaPay" || currentSelectedOption == "ValU") &&
                            <Fragment>
                                <p style={{marginTop:"10px"}}>
                                    {currentSelectedOption == "InstaPay" ?
                                        "Our InstaPay Number is: 01055569856"
                                        :
                                        currentSelectedOption == "ValU" &&
                                        "Our ValU Number is: 01547825982"
                                    }
                                </p>
                                <p style={{color:"#c0a33f"}}>* Kindly confirm when transfering the amount provided *</p>
                                <div className={"primaryButton mt-4"}>
                                    Confirm Payment
                                </div>
                            </Fragment>
                            
                        }
                    </div>

                </div>
            </Modal>

        </Fragment>
    );
};

export default Cart;