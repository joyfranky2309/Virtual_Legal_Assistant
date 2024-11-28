import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Chatbot from './components/Chatbotui';
import Docs from './components/docs';
import NavBar from './components/NavBar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Error from './components/Error';
import UserProfileCard from './components/UserProfileCard';
import { useAuth } from './components/auth/AuthContext';
import axios from 'axios';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Fir from './components/Fir';
import Rti from './components/Rti';
import  Updates from './components/updates';
import DownloadButton from './components/download';
import Stay from './components/stay';
import Licence from './components/license';
// import PDFReader from './components/PDFReader';

function App() {
    const {currentUser, isAuth, setIsAuth} = useAuth();
    console.log("test"+currentUser);
    const [storedUser, setStoredUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const retrievedUser = localStorage.getItem("User");
        if (retrievedUser) {
            setStoredUser(JSON.parse(retrievedUser)); 
            setIsAuth(true);
        }
    }, [setIsAuth]);

    useEffect(() => {
        axios.get("http://localhost:5000/")
            .catch(error => {
                navigate("*");
            });
    },[]);

    return (
        <div>
            <NavBar authState={isAuth} value={storedUser} />
            <Routes>
            <>
                <Route path='/' element={<HomePage/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/AboutPage'element={<AboutPage/>}/>
                <Route path='*' element={<Error code="404" message="Page not found" />} />
                <Route path="/chat" element={<Chatbot/>}/>
                <Route path ='/docs' element={<Docs />}/>
                <Route path ='/fir' element={<Fir/>}/>
                <Route path ='/rti' element={<Rti/>}/>
                <Route path= '/updates' element={<Updates/>}/>
                <Route path ='/stay' element={<Stay/>}/>
                <Route path ='/license' element={<Licence/>}/>
            </>
            </Routes>
            {/* <DownloadButton name={example}/> */}
            {/* <PDFReader /> */}
        </div>
    );
}

export default App;