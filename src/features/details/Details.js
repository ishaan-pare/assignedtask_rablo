import React from "react";

import "./details.css";
import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../form/formSlice";
import { useNavigate } from "react-router-dom";

function Details() {
    const formData = useSelector(state => state.form.value.formData);
    const langlikes = useSelector(state => state.form.value.langlikes);
    const conditions = useSelector(state => state.form.value.conditions);


    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <>
            <div className="menu">
                <div className="menu-left">
                    Roblo.in
                </div>
                <div className="menu-right">
                    Github
                </div>
            </div>
            <div className="rprofile">

                <div className="rprofile-down">
                    <div className="rprofile-down-left">
                        <div className="rprofile-left-img">
                            <img src={formData.profilePic} />
                        </div>
                        <div className="restaurant-menu-left">
                            <table className="styled-table">

                                <tbody>

                                    <tr>
                                        <td>Name</td>
                                        <td>{formData.fname + " " + formData.lname}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{formData.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Languages</td>
                                        <td>{
                                            (langlikes.Python) ? "Python, " : ""}{
                                                (langlikes.CPP) ? "CPP, " : ""}{
                                                (langlikes.Java) ? "Java, " : ""}{
                                                (langlikes.Go) ? "Go, " : ""}

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Terms Accepted?</td>
                                        <td>{conditions.terms?"Yes":"No"}</td>
                                    </tr>
                                    <tr>
                                        <td>Subscribed?</td>
                                        <td>{conditions.feed?"Yes":"No"}</td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <button onClick={() => { dispatch(setProgress(1)); navigate("/") }}>ReFill</button>
                </div>
            </div>

        </>
    );
}
export default Details;