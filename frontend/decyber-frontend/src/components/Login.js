import React from 'react'
import { Link } from "react-router-dom";
import "../styles/login.css"


export default function Login() {
    return (
        <div className='Login'>
            <div className='container' style={{ width: "50%" }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" ><h3>Email address</h3> </label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" ><h3>Password</h3></label>
                        <input type="password" className="form-control" name="password" id="password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Forgot Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#212529", color: "#3D6343", border: "none" }}>Login</button>
                    <hr style={{ color: '#3D6343' }} />
                    <div className='form-text mt-3'><p> New to DeCyber ?</p></div>
                    <Link to="/signup"><button type="submit" className="btn btn-primary my-3" style={{ backgroundColor: "#212529", color: "#3D6343", border: "none" }}>Signup</button></Link>
                </form>
            </div>
        </div>
    )
}
