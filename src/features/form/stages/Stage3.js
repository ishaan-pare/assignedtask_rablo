import React from "react";

import "../css/stage3.css";
import { useDispatch, useSelector } from "react-redux";
import { setLanglikes } from "../formSlice";
function Stage3() {
    const formData = useSelector(state => state.form.value.formData);
    const dispatch = useDispatch();
    var arr = ["", "", "", ""];

    const handleOnchange = (e) => {
        let ab = document.getElementsByName(e.target.name)[0].checked;
        if (e.target.name === "Python") {
            console.log(ab);
            if (ab) {
                arr[0] = "Python";
                dispatch(setLanglikes(arr));

            }
            else {
                arr[0] = "";
                dispatch(setLanglikes(arr));

            }


        }
        if (e.target.name === "CPP") {
            if (formData.langlikes[1].length === 0) {
                arr[1] = "CPP";
                dispatch(setLanglikes(arr));

            }
            else {
                arr[1] = "";
                dispatch(setLanglikes(arr));


            }
        }
        if (e.target.name === "Java") {
            if (formData.langlikes[2].length === 0) {
                arr[2] = "Java";
                dispatch(setLanglikes(arr));

            }
            else {
                arr[2] = "";
                dispatch(setLanglikes(arr));


            }
        }
        if (e.target.name === "Go") {
            if (formData.langlikes[3].length === 0) {
                arr[3] = "Go";
                dispatch(setLanglikes(arr));

            }
            else {
                arr[3] = "";
                dispatch(setLanglikes(arr));


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
                    <input type="checkbox" name="CPP" />
                    <label for="CPP">C++</label>
                    <br />
                    <input type="checkbox" name="Java" />
                    <label for="Java">Java</label>
                    <br />
                    <input type="checkbox" name="Go" />
                    <label for="Go">Go</label>
                </div>
            </div>
        </>
    );
}

export default Stage3;