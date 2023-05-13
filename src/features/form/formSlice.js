import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: "form",
    initialState: {
        value: {
            progress: 1,
            formData: {
                profilePic: "",
                fname: "",
                lname: "",
                email: "",
                password: "",
                age: "",
                langlikes: ["","","",""],
                termsAccepted: false,
                mailAccepted: false
            }
        }
    },
    reducers: {
        setProfilePic: (state, action)=>{
            state.value.formData.profilePic = action.payload
        },
        setFname: (state, action)=>{
            state.value.formData.fname = action.payload
        },
        setLname: (state, action)=>{
            state.value.formData.lname = action.payload
        },
        setEmail: (state, action)=>{
            state.value.formData.email = action.payload
        },
        setPassword: (state, action)=>{
            state.value.formData.password = action.payload
        },
        setAge: (state, action)=>{
            state.value.formData.age = action.payload
        },
        setLanglikes: (state, action)=>{
            state.value.formData.langlikes = action.payload
        },
        setTermAccepted: (state, action)=>{
            state.value.formData.termsAccepted = action.payload
        },
        setMailAccepted: (state, action)=>{
            state.value.formData.mailAccepted = action.payload
        },
        setProgress: (state, action)=>{
            state.value.progress = action.payload
        }
    }
});

export const {setProgress, setAge, setEmail, setFname, setLanglikes, setLname,setMailAccepted,setPassword,setProfilePic,setTermAccepted} = formSlice.actions;
export default formSlice.reducer;