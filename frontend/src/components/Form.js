import './styles/Form.css'
import hitCheckService from "../services/hitCheckService";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setRadius } from "../store/radiusSlice";




export default function Form() {
    const dispatch = useDispatch();
    const radius = useSelector((state) => state.radius.value);

    let inputAreaDot = {
        r: radius,
        x: null,
        y: null,
        isValid: false
    }


    function updateR (event) {
        dispatch(setRadius(event.target.value));
    }
    
    function updateX (event) {
        inputAreaDot.x = event.target.value;
    }
    
    function updateY (event) {
        inputAreaDot.y = event.target.value;
    }
    
    function send() {
        hitCheckService.checkHit(inputAreaDot);
    }
    
    function clean() {
        hitCheckService.deleteAllHitChecks();
    }
    
    return (
        <table className="form-table">
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="x">Coordinate X</label><br/>
                        <input id="x" type="text" name="x" placeholder="(2 ... 5)" className="text-field" 
                                onChange={updateX} value={inputAreaDot.x}/>
                    </td>
                    <td>
                        <label htmlFor="y">Coordinate Y</label><br/>
                        <input id="y" type="text" name="y" placeholder="(-3 ... 5)" className="text-field" 
                                onChange={updateY} value={inputAreaDot.y}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <table>
                            <tbody>
                                <tr id="y-label-row">
                                    <td colSpan="9" className="y-label">
                                        <label>Radius: </label><span>{radius}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="y+1" className="y-button" type="button" name="y" value="1" onClick={updateR}/>
                                        <input id="y+2" className="y-button" type="button" name="y" value="2" onClick={updateR}/>
                                        <input id="y+3" className="y-button" type="button" name="y" value="3" onClick={updateR}/>
                                        <input id="y+4" className="y-button" type="button" name="y" value="4" onClick={updateR}/>
                                        <input id="y+5" className="y-button" type="button" name="y" value="5" onClick={updateR}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        ______________________________
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input id="submit" type="button" value="Send" className="request-button" onClick={send}/>
                        <input id="clear" type="button" value="Clean" className="request-button" onClick={clean}/>
                        <input id="logout" type="button" value="Log out" className="request-button"/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}