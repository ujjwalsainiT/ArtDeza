import React, { useState, useEffect } from "react";
import HOC from "../../Common/HOC.jsx";
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

//css file 
import "./Register.css";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Register = (props) => {

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



    return (
        <>
            <div className="signup_Login_padding pb-5">
                <div className="Register_Main_div">
                    <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                        <p className="page_heading position-relative mt-3">Register</p>
                        <div className="main_padding_top_bottom">
                            <TextField
                                placeholder="Name"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"

                            />

                            <div className="mt-2">
                                <TextField
                                    placeholder="Email"
                                    id="outlined-basic"
                                    variant="outlined"
                                    autoComplete="off"

                                />

                            </div>
                            <div className="mt-2 Register_phone_input">
                                <PhoneInput
                                    country={'in'}
                                    countryCodeEditable={false}
                                // value={phone}
                                // onChange={(e) => {
                                //     setphoneError(false)
                                //     setphone(e)
                                // }}
                                />

                            </div>
                            <div className="mt-2">
                                <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        placeholder="Password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="off"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setshowPassword(!showPassword)}
                                                    onMouseDown={(event) => event.preventDefault()}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />

                                </FormControl>
                            </div>

                            <div className="inputfiledformatting mt-3">
                                <Button
                                    variant="contained"
                                    className="login_register_btn"
                                >
                                    Register
                                </Button>
                            </div>

                        </div>
                    </Card>

                    <Card className="pt-2 pb-2 Card_shadow mt-2">
                        <p>I already have an account, <span className="Login_in" onClick={() => props.history.push("/login")}>Log In</span></p>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default HOC(Register);
