import React from 'react'
import "../styles/signup.css"

export default function Signup() {
    return (
        <div className='Signup'>
            <div className='container' style={{ width: "50%" }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"><h5>Name</h5></label>
                        <input type="text" className="form-control" name="name" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" ><h5>Email address</h5></label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"><p>We'll never share your email with anyone else.</p></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><h5>Password</h5></label>
                        <input type="password" className="form-control" name="password" id="password" />
                        <div id="password" className="form-text"><p>Enter a strong password.</p></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" ><h5>College</h5></label>
                        <input type="college" className="form-control" name="college" id="college" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" ><h5>Status</h5></label>
                        <input type="status" className="form-control" name="status" id="status" />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#212529", color: "#3D6343", border: "none" }}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
