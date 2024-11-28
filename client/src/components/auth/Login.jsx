import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  
import { useAuth } from './AuthContext';
import { auth,googleProvider } from '../firebase';
import { signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {setCurrentUser,setIsAuth}=useAuth();
    const [googlebtn,setgooglebtn]=useState('');
    const handleFocus = (e) => {
        e.target.placeholder = '';
    };

    const handleBlur = (e) => {
        if (e.target.value === '') {
            e.target.placeholder = e.target.getAttribute('data-placeholder');
        }
    };
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithPopup(auth, googleProvider);
            setIsAuth(true);
            navigate('/chat');
        } catch (error) {
            setError(error.message);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        
         const user=signInWithEmailAndPassword(auth,email,password) 
         console.log(user)
         setCurrentUser(user)
         setIsAuth(true);
         navigate('/Chat')
          }
         catch (error) {
            console.log(error)
          setError('Invalid credentials');
        }
      };
      

    const done = () => {
        navigate('/register');
    };

    return (
        <div className='card ml-3'>
            <div className='card-body'>
                <div style={{marginTop:10}}>
                <h3 className='card-title'>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className='input-group mb-3'>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter your email" 
                            aria-label="Email" 
                            aria-describedby="basic-addon1" 
                            data-placeholder="Enter your email"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className='input-group mb-3'>
                        <input 
                            type="password" 
                            className="form-control"
                            placeholder="Enter your password"  
                            aria-label="Password" 
                            aria-describedby="basic-addon1"
                            data-placeholder="Enter your password"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                <div onClick={handleGoogleSignIn} style={{ display: "flex", justifyContent: "center" }} className='btn SignGoogle'>
                    <label >Continue with Google</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" fill={googlebtn} class="bi bi-google" viewBox="0 0 16 16" style={{ marginLeft: 10 }}  >
                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                    </svg>
                </div>
                    <div className='d-flex justify-content-center' style={{marginTop:10}}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <div className="form-check form-switch">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        id="flexSwitchCheckDefault" 
                        onClick={done} 
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="flexSwitchCheckDefault" 
                    >
                        Don't have an account? Click to Register
                    </label>
                </div>
                <label className='form-label'>Forgot your password?</label>
                </div>
            </div>
        </div>
    );
}export default Login;