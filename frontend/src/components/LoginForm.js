import './styles/Form.css'
import authService from "../services/authService";
import { useDispatch, useSelector } from "react-redux";
    
import { setRadius } from "../store/radiusSlice";

import {useNavigate} from "react-router-dom";

import {useEffect} from "react";
import { setLogin, setPassword } from "../store/userSlice";




export default function LoginForm() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value);
    
    function updateLogin (event) {
        dispatch(setLogin(event.target.value));
    }
    
    function updatePssword (event) {
        dispatch(setPassword(event.target.value));
    }
    
    function login() {
        console.log(user);
        authService.login(user)
        .then((response) => {
            if (response.ok) {
                navigate('/main', {replace: true});
            }
        })
    }
    
    const navigate = useNavigate();

    function redirectToMain() {
        navigate('/main', {replace: true});
    }


    function register() {
        console.log(user);
        authService.register(user)
        .then((response) => {
            if (response.ok) {
                navigate('/main', {replace: true});
            }
        })
    }
    

    return (
        <table className="form-table">
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="x">Login</label><br/>
                        <input type="text" className="text-field" 
                                onChange={updateLogin} value={user.login}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="y">Password</label><br/>
                        <input type="password" className="text-field" 
                                onChange={updatePssword} value={user.password}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="login" type="button" value="Login" className="request-button" onClick={login}/>
                        <input id="register" type="button" value="Register" className="request-button" onClick={register}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}