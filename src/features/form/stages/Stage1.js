import React from "react";

import "../css/stage1.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setFname, setLname, setPassword } from "../formSlice";
function Stage1() {

    const formData = useSelector(state=>state.form.value.formData);
    const dispatch = useDispatch();

    function isValidEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    }
    //password checker
    function isSamePass(pass, rpass) {
        if (pass === rpass) {
            return true;
        }
        return false;
    }
    function isValidPass(pass) {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(pass);
    }

    const onChange = (e)=>{
        if (e.target.name == "fname") {
            dispatch(setFname(e.target.value));
        }
        else if (e.target.name === "lname"){
            dispatch(setLname(e.target.value));

        }
        else if (e.target.name === "email") {
            if (!isValidEmail(e.target.value)) {
                document.getElementsByName(e.target.name)[0].style.boxShadow = "0px 0px 3px red";
            } 
            else {
                document.getElementsByName(e.target.name)[0].style.boxShadow = "0px 0px 3px green";
            }
            dispatch(setEmail(e.target.value));
        }
        else if (e.target.name === "password") {
            if (!isValidPass(e.target.value)) {
                document.getElementsByName(e.target.name)[0].style.boxShadow = "0px 0px 3px red";

            }
            else {
                document.getElementsByName(e.target.name)[0].style.boxShadow = "0px 0px 3px green";

            }
            dispatch(setPassword(e.target.value));
        }
        else if (e.target.name === "repassword") {
            console.log(formData.password);
            if (isSamePass(e.target.value, formData.password)) {
                document.getElementsByName(e.target.name)[0].style.boxShadow = "0px 0px 3px green";

            }
            else {
                document.getElementsByName(e.target.name)[0].style.boxShadow = "0px 0px 3px red";

            }
        }
    }

    return (
        <>
            <div className="st1t">
                <div className="st1t-tl">
                    <label for="fname">First Name:</label>
                    <input name="fname" placeholder="Enter First Name." onChange={onChange}/>
                </div>
                <div className="st1t-tr">
                    <label for="lname">Last Name:</label>
                    <input name="lname" placeholder="Enter Last Name." onChange={onChange}/>
                </div>
            </div><br/>
            <div className="st1m">
                <label for="email">Email: </label>
                <input name="email" placeholder="Enter your Email Id" onChange={onChange}/>
            </div><br/>
            <div className="st1t">
                <div className="st1t-tl">
                    <label for="password">Password: </label>
                    <input type="password" name="password" placeholder="Enter your Password" onChange={onChange}/>
                </div>
                <div className="st1t-tr">
                    <label for="rpassword">Re-Password: </label>
                    <input type="repassword" name="repassword" placeholder="Enter your Password" onChange={onChange}/>
                </div>
            </div>
        </>
    );
}

export default Stage1;