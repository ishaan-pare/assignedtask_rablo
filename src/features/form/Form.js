import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./css/form.css";
import Stage1 from "./stages/Stage1";
import Stage2 from "./stages/Stage2";
import Stage3 from "./stages/Stage3";
import Stage4 from "./stages/Stage4";
import { setProgress } from "./formSlice";

import { useNavigate } from "react-router-dom";

function Form() {
    const progress = useSelector(state => state.form.value.progress);
    const formData = useSelector(state => state.form.value.formData);
    const conditions = useSelector(state => state.form.value.conditions);
    const dispatch = useDispatch();

    const navigate = useNavigate();


    useEffect(() => {
        if (progress == 1) {
            document.getElementById("circle1").style.border = "2px solid blue";
            document.getElementById("circle2").style.border = "1px solid red";
            document.getElementById("circle3").style.border = "1px solid red";
            document.getElementById("circle4").style.border = "1px solid red";

        }
        else if (progress == 2) {
            document.getElementById("circle2").style.border = "2px solid blue";
            document.getElementById("circle1").style.border = "1px solid red";
            document.getElementById("circle3").style.border = "1px solid red";
            document.getElementById("circle4").style.border = "1px solid red";
        }
        else if (progress == 3) {
            document.getElementById("circle3").style.border = "2px solid blue";
            document.getElementById("circle2").style.border = "1px solid red";
            document.getElementById("circle1").style.border = "1px solid red";
            document.getElementById("circle4").style.border = "1px solid red";
        }
        else if (progress == 4) {
            document.getElementById("circle4").style.border = "2px solid blue";
            document.getElementById("circle2").style.border = "1px solid red";
            document.getElementById("circle3").style.border = "1px solid red";
            document.getElementById("circle1").style.border = "1px solid red";
        }
    }, [progress]);

    const onSubmit = () => {
        navigate("/details");
    }
    const onNext = (e) => {
        if (progress === 1) {
            if (formData.profilePic.length <= 0) {
                alert("Please upload your file");
            }
            else {
                dispatch(setProgress(progress + 1));

            }
        }
        if (progress === 2) {
            if (formData.fname.length <= 0 || formData.password.length <= 0 || formData.lname.length <= 0 || formData.email.length <= 0) {
                alert("Please your details");
            }
            else {
                dispatch(setProgress(progress + 1));

            }
        }
        if (progress == 3) {
            dispatch(setProgress(progress + 1));

        }
        if (progress == 4) {
            if (conditions.terms || conditions.feed) {
                dispatch(setProgress(progress + 1));

            }
            else {
                
            }
        }
    }

    return (
        <div className="container">
            <div className="menu">
                <div className="menu-left">
                    Roblo.in
                </div>
                <div className="menu-right">
                    Github
                </div>
            </div>
            <div className="form">
                <div className="progress">
                    <div id="circle1">
                        1
                    </div>
                    <div id="line">
                    </div>
                    <div id="circle2">
                        2
                    </div>
                    <div id="line">
                    </div>
                    <div id="circle3">
                        3
                    </div>
                    <div id="line">
                    </div>
                    <div id="circle4">
                        4
                    </div>
                </div>
                <div className="stage-form">
                    {
                        progress === 1 ?
                            <Stage2 /> :
                            (progress === 2) ?
                                <Stage1 /> :
                                (progress === 3) ?
                                    <Stage3 /> :
                                    (progress === 4) ?
                                        <Stage4 /> : <></>
                    }
                </div>
                <div className="controls">
                    <div className="msg">

                    </div>
                    {
                        (progress < 4) ?
                            <button onClick={onNext}>Next</button>
                            : <button onClick={onSubmit}>Submit</button>
                    }
                    {
                        (progress > 1) ?

                            <button onClick={() => dispatch(setProgress(progress - 1))}>Prev</button>
                            : <button disabled={true}>Prev</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default Form;