import './styles/Area.css'

import { useDispatch, useSelector } from "react-redux";




function createDotHtml(cx, cy, isHit) {
    const svg = document.getElementById("area-svg");
    const svgNS = "http://www.w3.org/2000/svg";
    const dot = document.createElementNS(svgNS, "circle");

    setCreatedDotAttributes(dot, cx, cy, isHit);
    svg.appendChild(dot);
}

function setCreatedDotAttributes(dot, cx, cy, isHit) {
    const r = "2.5";
    const styleClass = (isHit) ? "hit dot" : "fail dot";

    dot.setAttributeNS(null,"cx", cx);
    dot.setAttributeNS(null,"cy", cy);
    dot.setAttributeNS(null,"r", r);
    dot.setAttributeNS(null,"class", styleClass);
}







export default function Area() {
    const hitChecks = useSelector(state => state.hitChecks.data);
    const areaDot = useSelector((state) => state.areaDot.value);


    function getDotOffset(coordinateValue) {
        const radiusOffset = 100;
        let dotOffset = coordinateValue / areaDot.r * radiusOffset;
        return correctDotOffset(dotOffset);
    }
    
    function correctDotOffset(dotOffset) {
        const maxOffset = 149.5;
        const minOffset = -149.5;
    
        if (dotOffset > maxOffset) return maxOffset;
        if (dotOffset < minOffset) return minOffset;
        return dotOffset;
    }

    function getCx(x) {
        const centerCoordinate = 150;
        const dotOffsetX = getDotOffset(x);
        const dotCoordinateX = centerCoordinate + dotOffsetX;
        return dotCoordinateX;
    }

    function getCy(y) {
        const centerCoordinate = 150;
        const dotOffsetY = getDotOffset(y);
        const dotCoordinateY = centerCoordinate - dotOffsetY;
        return dotCoordinateY;
    }


    return (
        <svg id="area-svg" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150,200 150,150 50,150 50,200" className="area" />
            <polygon points="200,150 150,150 150,200" className="area" />
            <path d="M50,150 A100,100 90 0,1 150,50 L 150,150 Z" className="area" />

            <line x1="15"  x2="275" y1="150" y2="150" className="line" />
            <line x1="150" x2="150" y1="25"  y2="285" className="line" />

            <polygon points="290,150 275,146 275,154" className="arrow" />
            <polygon points="150,10  146,25  154,25"  className="arrow" />

            <circle id="dot-x-m2" cx="50"  cy="150" r="2" />
            <circle id="dot-x-m1" cx="100" cy="150" r="2" />
            <circle id="dot-x-p1" cx="200" cy="150" r="2" />
            <circle id="dot-x-p2" cx="250" cy="150" r="2" />

            <circle id="dot-y-p2" cx="150" cy="50"  r="2" />
            <circle id="dot-y-p1" cx="150" cy="100" r="2" />
            <circle id="dot-y-m1" cx="150" cy="200" r="2" />
            <circle id="dot-y-m2" cx="150" cy="250" r="2" />

            <circle id="dot-center" cx="150" cy="150" r="2" />

            <text x="285" y="140">X</text>
            <text x="160" y="15">Y</text>

            <text x="40" y="140">-R</text>
            <text x="85" y="140">-R/2</text>
            <text x="190" y="140">R/2</text>
            <text x="245" y="140">R</text>

            <text x="160" y="52.5">R</text>
            <text x="160" y="102.5">R/2</text>
            <text x="160" y="202.5">-R/2</text>
            <text x="160" y="252.5">-R</text>

            {
                hitChecks.map((element, index) =>
                    <circle className={element.hit ?  "hit dot" : "fail dot"}
                            cx={getCx(element.areaDot.x)} 
                            cy={getCy(element.areaDot.y)} 
                            r="2.5" />
                )
            }

        </svg>
    );
}