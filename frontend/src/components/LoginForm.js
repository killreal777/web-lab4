import './styles/Form.css'
import hitCheckService from "../services/hitCheckService";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setRadius } from "../store/radiusSlice";

import { setR, setX, setY } from "../store/areaDotSlice";




export default function LoginForm() {
    const dispatch = useDispatch();
    const areaDot = useSelector((state) => state.areaDot.value);

    function updateR (event) {
        dispatch(setR(event.target.value));
        console.log(areaDot.r)
    }
    
    function updateX (event) {
        const x = event.target.value;
        dispatch(setX(x));
    }
    
    function updateY (event) {
        dispatch(setY(event.target.value));
    }
    
    function send() {
        hitCheckService.checkHit(areaDot);
    }
    
    function clean() {
        hitCheckService.deleteAllHitChecks();
    }
    
    return (
        <table className="form-table">
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="x">Login</label><br/>
                        <input id="x" type="text" name="x" placeholder="(2 ... 5)" className="text-field" 
                                onChange={updateX} value={areaDot.x}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="y">Password</label><br/>
                        <input id="y" type="text" name="y" placeholder="(-3 ... 5)" className="text-field" 
                                onChange={updateY} value={areaDot.y}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="submit" type="button" value="Login" className="request-button" onClick={send}/>
                        <input id="clear" type="button" value="Register" className="request-button" onClick={clean}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}