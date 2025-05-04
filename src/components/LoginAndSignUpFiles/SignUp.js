// React
import React, {Fragment, useState} from "react";
import {Link} from 'react-router-dom';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/modalStyles.css';
import '../StyleSheets/bootstrapstyles.css';
import loginStyles from './loginstyles.module.css';

// Image
import backgroundImage from "../images/bg-image.jpeg"

const SignUp = (props) => {

    const inputs = [
        {
            labelName: "First Name",
            placeholder: "Enter your first name",
            type:"text",
        },
        {
            labelName: "Last Name",
            placeholder: "Enter your Last name",
            type:"text",
        },
        {
            labelName: "User Name",
            placeholder: "Please choose a unique username",
            type:"text",
        },
        {
            labelName: "Email",
            placeholder: "Please enter your email",
            type:"email",
        },
        {
            labelName: "Phone Number",
            placeholder: "Please enter your phone number",
            type:"phone",
        },
        {
            labelName: "Gender",
            placeholder: "Male or Female",
            type:"text",
        },
        {
            labelName: "Password",
            placeholder: "Write Your New Password",
            type:"password",
        },
        {
            labelName: "Confirm Password",
            placeholder: "Write Your New Password",
            type:"password",
        },
    ]

    return(
        <Fragment>

            <div className={" row d-relative m-0 w-100 h-100 align-items-center justify-content-center "}>
                <div className={`${loginStyles.loginBackgroundContainer}`}>
                    <img src={backgroundImage}/>
                </div>

                <div className={`${loginStyles.loginSubContainer} ${loginStyles.signUpSubContainer}`}>
                    
                    <div className={`${loginStyles.sectionTitle}`} style={{color:"#c0a33f"}}>
                        Sign Up
                    </div>

                    <div className={"row m-0 w-100 align-items-center justify-content-center"}>
                        {/* Input Fields */}
                        {inputs.map((data, index)=>{
                            return(
                                <div key={index} className='col-lg-3 mb-4'>
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

                    <div className={`${loginStyles.buttonsContainer}`}>
                        <Link to={"/home"} className={"secondaryButton"}>
                            Sign Up
                        </Link>
                        <Link to={'/login'} className={"yellowNormalButton"}>
                            Already have an account ?
                        </Link>
                    </div>
                    
                </div>
            </div>
        
        </Fragment>
    )
}

export default SignUp;