import React, { useEffect } from "react";

import "../css/stage2.css";
import dprof from "../../../res/dprof.png";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePic } from "../formSlice";

function Stage2() {
    const profPic = useSelector(state=>state.form.value.formData.profilePic);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(profPic);
    }, [profPic]);

    const onProfileChange = (e)=>{
        e.preventDefault();
        dispatch(setProfilePic(URL.createObjectURL(e.target.files[0])));

    }

    return (
        <>
            <div className="st2">
                <div className="st2-head">
                    Upload your profile photo first
                </div>
                <div className="st2-body">
                    <div className="simg" id="profimg">
                        <img src={profPic || dprof} id="profimg"/>

                    </div>
                    <div className="simgip">
                        <input type="file" name="simg" onChange={onProfileChange}/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Stage2;