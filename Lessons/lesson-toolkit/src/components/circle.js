import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCircle} from "../redux/circleSlice"

const Circle = () => {

    let position = useSelector(state => state.circle.pos)
    let [isDragging, setDragging] = useState(false);
    let [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const dispatch = useDispatch();

    const handleMouseDown = (e) => {
        setStartPos({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        })
        setDragging(true);
    }

    const handleMouseMove = (e) => {
        if (isDragging) {
            dispatch(setCircle({
                x: e.clientX - startPos.x,
                y: e.clientY - startPos.y
            }))
        }
    }

    const handleMouseUp = (e) => {
        setDragging(false)
    }

    return (
        <div
            className="circle"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
                top: position.y,
                left: position.x
            }}
        >
            <img></img>
        </div>
    )
}

export default Circle;