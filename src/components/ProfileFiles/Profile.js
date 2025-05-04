// React
import React, {Fragment, useState} from "react";
import {useNavigate} from "react-router-dom";

// CSS Files
import profileStyles from "./profile.module.css";
import "../StyleSheets/tablestyles.css";

// Images
import profileImage from "../images/profileImage.jpg"

// Icons
import {FiSettings} from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";
import { TbPhotoEdit } from "react-icons/tb";
import { PiContactlessPaymentFill } from "react-icons/pi";
import {MdOutlinePayments, MdHistory, MdDeleteForever} from "react-icons/md";

// Modal
import Modal from "react-modal"

const Profile = () => {

    // const handleChangeProfileImage = (imageName, userID) => {
    //     userProfileImageToBeChanged.profileImg = imageName

    //     axios
    //         .patch(`http://localhost:4000/api/v1/accounts/${userID}`,userProfileImageToBeChanged)
    //         .then((resp)=>{
    //             resp.status == 201 ? alert(t("DataChangedSuccessfully")) : console.log(resp)
    //         })
    //         .catch((err)=>{
    //             console.log(err.response.data.message)    
    //         })
    // }

    const cardsContent = [
        {
            icon:MdOutlinePayments,
            title:"Payment Cards",
            option:"payment"
        },
        {
            icon:MdHistory,
            title:"Payment History",
            option:"history"
        },
        {
            icon:FiSettings,
            title:"Go To Settings",
            option:"settings"
        },
        {
            icon:PiContactlessPaymentFill,
            title:"Contact Us",
            option:"contact"
        }
    ]

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false)
    const [currentSelectedOption, setCurrentSelectedOption] = useState(" ")
    // Modal
    const customStyles = {
        content: {
          top: '43%',
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

    const paymentMethodTableHeader = [
        {
            title: "Card Holder Name"
        },
        {
            title: "Card Number"
        },
        {
            title: "Expiry Date"
        }
    ]

    const paymentCards = [
        {
            holderName: "YASMINE AMR ALASHRY",
            cardNumber: 5254458565982345,
            expiryDate: "01/25"
        },
        {
            holderName: "AHMED AMR ALASHRY",
            cardNumber: 5254458565982345,
            expiryDate: "01/25"
        },
        {
            holderName: "OLA AMR ALASHRY",
            cardNumber: 5254458565982345,
            expiryDate: "01/25"
        },
        {
            holderName: "MOHAMED AMR ALASHRY",
            cardNumber: 5254458565982345,
            expiryDate: "01/25"
        },
    ]

    const userInvoices = [
        {
            id: 1,
            cardHolderName: "YASMINE AMR ALASHRY",
            cardNumber: 5216458648524555,
            totalPrice: 54.20,
            totalPaid: 55,
            extra: 0.80,
            transaction: "Accepted"
        },
        {
            id: 2,
            cardHolderName: "YASMINE AMR ALASHRY",
            cardNumber: 5216458648524555,
            totalPrice: 54.20,
            totalPaid: 55,
            extra: 0.80,
            transaction: "Rejected"
        },
        {
            id: 3,
            cardHolderName: "YASMINE AMR ALASHRY",
            cardNumber: 5216458648524555,
            totalPrice: 54.20,
            totalPaid: 55,
            extra: 0.80,
            transaction: "Accepted"
        },
        {
            id: 4,
            cardHolderName: "YASMINE AMR ALASHRY",
            cardNumber: 5216458648524555,
            totalPrice: 54.20,
            totalPaid: 55,
            extra: 0.80,
            transaction: "Rejected"
        },
        {
            id: 5,
            cardHolderName: "YASMINE AMR ALASHRY",
            cardNumber: 5216458648524555,
            totalPrice: 54.20,
            totalPaid: 55,
            extra: 0.80,
            transaction: "Rejected"
        }
    ]

    return(
        <Fragment>

            <div className={"row m-0 w-100 align-items-center justify-content-center mt-3 mb-3"}>
                <div className={`${profileStyles.mainContainer}`}>
                    
                    <div className={`${profileStyles.leftContentContainer}`}>

                        <div className={`${profileStyles.editImageContainer}`}>
                            
                            <div className={`${profileStyles.profileImgContainerImage}`}>
                                <img
                                    title={"user-profile-image.type"}
                                    src={profileImage}
                                    id="image"
                                />
                            </div>
                            
                            <input
                                // filename={imageURL+userFoundLocal.profileImg}
                                type="file"
                                id="profileImage"
                                accept="image/*"
                                style={{display:"none"}}
                                // onChange={(e) =>{
                                //     handleChangeProfileImage(e.target.files[0].name, userFoundLocal._id)
                                // }}
                            />

                            <button
                                className={`${profileStyles.profileImgButton}` + " button centeredSecondaryButton "}
                                onClick={()=>{
                                    document.getElementById("profileImage").click()
                                }} 
                            >
                                <TbPhotoEdit size={20}/>
                            </button>

                        </div>

                        <div className={`${profileStyles.userInformationContainer}`}>
                            <div>
                                Account Number: <span>012</span>
                            </div>
                            <div>
                                Username: <span>YAshry98</span>
                            </div>
                            <div>
                                Email: <span>yaelashry98@gmail.com</span>
                            </div>
                        </div>

                    </div>

                    <div className={`${profileStyles.rightContentContainer}`}>
                        {cardsContent.map((data,index)=>{
                            return(
                                <Fragment>
                                    <div className={`${profileStyles.cardContainer}`}
                                        onClick={()=>{
                                            setCurrentSelectedOption(data.option)
                                            if(data.option == "settings")
                                            {
                                                navigate("/settings");
                                            }
                                            else{
                                                setShowModal(true);
                                            }
                                        }}
                                    >
                                        <div>
                                            <data.icon size={45}/>
                                        </div>
                                        {data.title}
                                    </div>
                                </Fragment>
                            )
                        })}
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
                            {currentSelectedOption == "payment" ?
                                "Payment Cards"
                                :
                                currentSelectedOption == "history" ?
                                "Payment History"
                                :
                                currentSelectedOption == "contact" &&
                                "Contact Us"
                            }
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
                        {currentSelectedOption == "payment" ?
                            <Fragment>

                                {/* Payment Cards Found */}
                                <div className={`${profileStyles.profilePaymentsContainer}`}>
                                    <div className={`${profileStyles.profilePaymentsInnerContainer}`}>
                                        <table style={{width:"100%", padding:"10px 0px"}}>
                            
                                            <tr className={" tableHeader "} style={{textAlign:"center"}}>
                                                {paymentMethodTableHeader.map((data,index)=>{
                                                    return(
                                                        <th key={index} className={"pb-3"}>
                                                            {data.title}
                                                        </th>
                                                    )
                                                })}
                                            </tr>
                                            
                                            {paymentCards.map((payment, index)=>{
                                                return(
                                                    <tr key={index} className={" tableRow "}>
                                                        <td>
                                                            <div className={" tableContent "}>
                                                                {payment.holderName}
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className={" tableContent "}>
                                                                {payment.cardNumber}
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className={" tableContent "}>
                                                                {payment.expiryDate}
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
                                    </div>
                                </div>

                                {/* If No Payment Methods Added Yet */}
                                {/* <p style={{textAlign:"center"}}>
                                    <span style={{color:"#c0a33f", fontSize:"18px"}}>
                                        *No Cards To Be Used*<br/> 
                                    </span>
                                    Please Add One When Checking<br/> 
                                    Out To Be Used For Future Purchases
                                </p> */}

                            </Fragment>
                            :
                            currentSelectedOption == "history" ?
                            <Fragment>
                                
                                {/* If No Invoices Were Made Yet */}
                                {/* <p style={{textAlign:"center"}}>
                                    <span style={{color:"#c0a33f", fontSize:"18px"}}>
                                        *No Payments Made Yet*<br/> 
                                    </span>
                                    All Invoices Will Be Shown Here When You <br/>
                                    Make Any Payment. Start Buying Your First Track! 
                                </p> */}
                                
                                <div className={profileStyles.modalInvoiceContainer}>
                                    <div className={profileStyles.modalInvoiceInnerContainer}>
                                        {userInvoices.map((invoice, index)=>{
                                            return(
                                                <Fragment key={index}>

                                                    <div className={"mb-4"}>

                                                        <div className={`${profileStyles.modalInvoiceTitle}`}>
                                                            Invoice: # {invoice.id}
                                                        </div>
                                                        
                                                        <div className={`${profileStyles.modalInvoiceContent}`}>

                                                            <span>
                                                                Card Holder Name: {invoice.cardHolderName}
                                                            </span>

                                                            <span>
                                                                Card Number: {invoice.cardNumber}
                                                            </span>

                                                            <span>
                                                                Total Price: {invoice.totalPrice}
                                                            </span>

                                                            <span>
                                                                Total Paid: {invoice.Paid}
                                                            </span>

                                                            <span>
                                                                Extra: {invoice.extra}
                                                            </span>

                                                            <span>
                                                                Transaction: {invoice.transaction}
                                                            </span>

                                                        </div>

                                                    </div>

                                                </Fragment>
                                            )
                                        })}
                                    </div>
                                </div>

                            </Fragment>
                            :
                            currentSelectedOption == "contact" &&
                            <Fragment>
                                <div className={"row m-0 w-100 align-items-center justify-content-center pl-4"}>
                                    <div className={`${profileStyles.modalContactInfoContainer}` + " mb-3 "}>
                                        <div className={profileStyles.modalContactInfoContent}>
                                            Phone Number: 
                                            <span>010666681207</span>
                                        </div>
                                        <div className={profileStyles.modalContactInfoContent}>
                                            Email: 
                                            <span>yaelashry98@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className={profileStyles.modalContactInfoContainer}>
                                        <div className={profileStyles.modalContactInfoContent}>
                                            Location: 
                                            <span>22 Kaboul St, Nasr City, Cairo, Egypt</span>
                                        </div>
                                        <div className={profileStyles.modalContactInfoContent}>
                                            Opening Hours: 
                                            <span>8:00 am till 4:00 pm</span>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                            
                        }
                    </div>

                </div>
            </Modal>

        </Fragment>
    )
}

export default Profile;
