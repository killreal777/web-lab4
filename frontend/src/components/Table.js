import { useEffect } from "react";
import hitCheckService from "../services/hitCheckService";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../store/hitCheckSlice";


export default function Table() {
    const dispatch = useDispatch();

    useEffect(() => {
        hitCheckService.getAllHitChecks()
        .then((data) => {
            dispatch(setData({data}));
        })
    });

    let hitChecks = useSelector(state => state.hitChecks.data);

    return (
        <table id="results-table">
            <thead>
                <tr>
                    <td>Start time</td>
                    <td>Execution time</td>
                    <td>X</td>
                    <td>Y</td>
                    <td>R</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody id="results-table-body">
                    {
                        hitChecks.map((element, index) =>
                            <tr key={index}>
                                <td>{element.startTime.substr(11, 8)}</td>
                                <td>{element.executionTimeNano}</td>
                                <td>{element.areaDot.x}</td>
                                <td>{element.areaDot.y}</td>
                                <td>{element.areaDot.r}</td>
                                <td>{element.hit ? "Hit" : "Miss"}</td>
                            </tr>
                        )
                    }
            </tbody>
        </table>
    );
}

