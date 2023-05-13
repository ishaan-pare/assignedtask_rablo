import React from "react";

import "../css/stage3.css";
import { useDispatch, useSelector } from "react-redux";
import { setCPP, setGo, setJava, setLanglikes, setPython } from "../formSlice";
function Stage3() {
    const formData = useSelector(state => state.form.value.formData);
    const dispatch = useDispatch();

    const handleOnchange = (e) => {
        let ab = document.getElementsByName(e.target.name)[0].checked;

        if (e.target.name === "Python") {
            if (ab) {
                dispatch(setPython(true));
            }
            else {
                dispatch(setPython(false));
            
                
            }
        }
        if (e.target.name === "CPP") {
            if (ab) {
                dispatch(setCPP(true));
            }
            else {
                dispatch(setCPP(false));
            
                
            }
        }
        if (e.target.name === "Java") {
            if (ab) {
                dispatch(setJava(true));

            }
            else {
                dispatch(setJava(true));


            }
        }
        if (e.target.name === "Go") {
            if (ab) {
                dispatch(setGo(true));

            }
            else {

                dispatch(setGo(true));

            }
        }

    }

    return (
        <>
            <div className="st3">
                <div className="st3-head">
                    Please select your favourite language
                </div><br />
                <div className="st3-body">
                    <input type="checkbox" name="Python" onChange={handleOnchange} />
                    <label for="Python">Python</label>
                    <br />
                    <input type="checkbox" name="CPP" onChange={handleOnchange}/>
                    <label for="CPP">C++</label>
                    <br />
                    <input type="checkbox" name="Java" onChange={handleOnchange}/>
                    <label for="Java">Java</label>
                    <br />
                    <input type="checkbox" name="Go" onChange={handleOnchange}/>
                    <label for="Go">Go</label>
                </div>
            </div>
        </>
    );
}

export default Stage3;