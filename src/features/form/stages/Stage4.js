import React from "react";

import "../css/stage4.css";
import { useDispatch, useSelector } from "react-redux";
import { setFeed, setTerm } from "../formSlice";
function Stage4() {
    const formData = useSelector(state => state.form.value.conditions);

    const dispatch = useDispatch();


    const handleOnChange = (e)=>{
        if (e.target.name === "tncy") {
            if (document.getElementsByName(e.target.name)[0].checked) {
                dispatch(setTerm(true));
                document.getElementsByName("tncn")[0].checked = false;
            }
            else {
                dispatch(setTerm(false));
                document.getElementsByName("tncy")[0].checked = false;

            }
        }
        if (e.target.name === "tncn") {
            if (document.getElementsByName(e.target.name)[0].checked) {
                dispatch(setTerm(false));
                document.getElementsByName("tncy")[0].checked = false;
            }
            else {
                dispatch(setTerm(true));
                document.getElementsByName("tncn")[0].checked = false;
            }
        }
        if (e.target.name === "fy") {
            if (document.getElementsByName(e.target.name)[0].checked) {
                dispatch(setFeed(true));
                document.getElementsByName("fn")[0].checked = false;
            }
            else {
                dispatch(setFeed(false));
                document.getElementsByName("fy")[0].checked = false;
            }
        }
        if (e.target.name === "fn") {
            if (document.getElementsByName(e.target.name)[0].checked) {
                dispatch(setTerm(false));
                document.getElementsByName("fy")[0].checked = false;
            }
            else {
                dispatch(setFeed(true));
                document.getElementsByName("fn")[0].checked = false;
            }
        }

    }
  

    return (
        <>
            <div className="first">
                <div className="head">
                    Terms and conditions
                </div>
                <div className="mid">
                    We hope you have gone thorough all the terms and conditions after selecting yes option
                </div>
                <div className="last">
                    <label for="tncy">Yes</label>
                    <input type="radio" name="tncy" onChange={handleOnChange}/>
                    <label for="tncn">No</label>
                    <input type="radio" name="tncn" onChange={handleOnChange}/>
                </div>
            </div>
            <div className="first">
                <div className="head">
                    Further opportunities
                </div>
                <div className="mid">
                    If you want further opportunities then click on yes option else you can select no
                </div>
                <div className="last">
                    <label for="tncy">Yes</label>
                    <input type="radio" name="fy" onChange={handleOnChange}/>
                    <label for="tncn">No</label>
                    <input type="radio" name="fn" onChange={handleOnChange}/>
                </div>
            </div>
        </>
    );
}

export default Stage4;