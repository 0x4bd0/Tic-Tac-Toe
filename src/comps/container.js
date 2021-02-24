import { useEffect, useState } from "react";
import { calculateWinner } from "../functions/checkWinner";
import Board from "./board";

const Container = () => {
    const [board,setBoard]  = useState(Array(9).fill(null))
    const [score,setScore] = useState([ {player:"X",score:0}, {player:"O",score:0}, {player: "D", score: 0}])
    const [round,setRound] = useState(0)
    const input =  round%2 === 0 ? 'X' : 'O'

    const winner = calculateWinner(board)

    useEffect(()=>{
        if(winner ) {
            alert(winner + 'Wins!')
            setRound(0)
            setBoard(Array(9).fill(null))
        } else if(round == 8){
            alert('Draw')
            setRound(0)
            setBoard(Array(9).fill(null))
        }
    },[board])

    const check = (index) => {  
        let tmp = [...board]
        tmp[index] = input
        setBoard(tmp)
        setRound(round+1)
    } 

    return ( 
        <Board boxs={board} check={check} score={score}></Board>
     );
}
 
export default Container;