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

const Login = (props) => {

    const inputs = [
        {
            labelName: "UserName",
            placeholder: "username",
            type:"text",
        },
        {
            labelName: "Password",
            placeholder: "Write Your New Password",
            type:"password",
        }
    ]

    return(
        <Fragment>

            <div className={" row d-relative m-0 w-100 h-100 align-items-center justify-content-center "}>
                <div className={`${loginStyles.loginBackgroundContainer}`}>
                    <img src={backgroundImage}/>
                </div>

                <div className={`${loginStyles.loginSubContainer}`}>
                    
                    <div className={`${loginStyles.sectionTitle}`}>
                        Login
                    </div>

                    <div className={"row m-0 w-100 align-items-center justify-content-center"}>
                        {/* Input Fields */}
                        {inputs.map((data, index)=>{
                            return(
                                <div key={index} className='col-lg-8 mb-3'>
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
                        <Link to={"/home"} className={"primaryButton"}>
                            Login
                        </Link>
                        <Link to={'/signup'} className={"redNormalButton"}>
                            Don't have an account yet ?
                        </Link>
                    </div>
                    
                </div>
            </div>
        
        </Fragment>
    )
}

export default Login;