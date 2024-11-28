import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfileCard from './UserProfileCard';
import { useAuth } from './auth/AuthContext';
import '../components/NavBar.css';

function NavBar() {
    const navigate = useNavigate();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const { user, isAuth, setIsAuth, setUser } = useAuth();

    const handleGetStarted = () => {
        navigate("/login");
    };

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleClosePopup = () => {
        setIsProfileDropdownOpen(false);
    };

    const handleLogOut = () => {
        const confirmed = window.confirm("Are you sure you wanna logout? Your details will be forgotten!");
        if (confirmed) {
            localStorage.clear();
            setIsAuth(false);
            setUser(null);
            navigate("/login");
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 bg-white rounded">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1" style={{ fontSize: 50, cursor: 'pointer',fontFamily:'Harrington'}} onClick={() => navigate("/")}>
                        Vidhi
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        {!user ? (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <span className="nav-link active" aria-current="page" onClick={() => navigate("/updates")} style={{ cursor: 'pointer' }}>
                                        Updates
                                    </span>
                                </li>
                                {/* <li className="nav-item">
                                    <span className="nav-link active" aria-current="page" onClick={() => navigate("/register")} style={{ cursor: 'pointer' }}>
                                        Sign in 
                                    </span>
                                </li> */}
                                <li className="nav-item">
                                    <span className="nav-link active" aria-current="page" onClick={() => navigate("/docs")} style={{ cursor: 'pointer' }}>
                                        Docs
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link active" aria-current="page" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
                                        Home
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" onClick={() => navigate("/AboutPage")} style={{ cursor: 'pointer' }}>
                                        About us
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-success get-started-btn" onClick={handleGetStarted}>
                                        Get Started
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <div className="d-flex align-items-center">
                                <button className="btn btn-success me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    See previous chats
                                </button>
                                <div className="profile-container">
                                    <button className="btn btn-primary profile-btn" type="button" onClick={handleProfileClick}>
                                        Profile
                                    </button>
                                    {isProfileDropdownOpen && user && (
                                        <UserProfileCard 
                                            name={user.username} 
                                            photo="profile-photo-url.jpg" 
                                            age={user.age} 
                                            email={user.email}
                                            handleClosePopup={handleClosePopup}
                                        />
                                    )}
                                </div>
                                <button className="btn btn-danger logout-btn" type="button" onClick={handleLogOut}>
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">History</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    
                </div>
            </div>
        </div>
    );
}

export default NavBar;