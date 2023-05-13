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
                termsAccepted: false,
                mailAccepted: false
            },
            langlikes: {
                Python: false,
                CPP: false,
                Java: false,
                Go: false
            },
            conditions: {
                terms: false,
                feed: false
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
        setPython: (state, action)=>{ 
            state.value.langlikes.Python = action.payload
        },
        setJava: (state, action)=>{ 
            state.value.langlikes.Java = action.payload
        },
        setCPP: (state, action)=>{ 
            state.value.langlikes.CPP = action.payload
        },
        setGo: (state, action)=>{ 
            state.value.langlikes.Go = action.payload
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
        setTerm: (state, action)=> {
            state.value.conditions.terms = action.payload
        },
        setFeed: (state, action)=> {
            state.value.conditions.feed = action.payload
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

export const {setProgress, setAge, setEmail,setFeed, setTerm, setFname, setPython,setGo,setJava,setCPP ,setLname,setMailAccepted,setPassword,setProfilePic,setTermAccepted} = formSlice.actions;
export default formSlice.reducer;