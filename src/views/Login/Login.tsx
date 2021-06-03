import React from 'react'
import {LoginBase} from "./Login.style";
import { Link } from 'react-router-dom'
import './fonts/ionicons.min.css'

const Login = (): JSX.Element => {
    return <LoginBase>
        <form>
            <div className="illustration">
                <i className="icon ion-ios-locked-outline" />
            </div>
            <div className="mb-3">
                <input className="form-control" type="email" name="email" placeholder="hello@amaharjan.com" />
            </div>
            <div className="mb-3">
                <input className="form-control"
                       type="password"
                       name="password"
                       placeholder="kyomimountaineering" />
            </div>
            <div className="mb-3">
                <Link to={'/'} className="btn btn-primary d-block w-100">
                    Sign In
                </Link>
            </div>

            <p className="forgot">
                Forgot your email or password?
            </p>
        </form>
    </LoginBase>
}

export default Login