import { useState } from "react";
import { calculateWinner } from "../functions/checkWinner";
import Board from "./board";

const Container = () => {
    const [history,setHistory]  = useState([Array(9).fill(null)])
    const [round,setRound] = useState(0)

    const winner = calculateWinner(history[round])

    return ( 
        <Board boxs={history[round]}></Board>
     );
}
 
export default Container;