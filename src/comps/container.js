import { useEffect, useState } from "react";
import { calculateWinner } from "../functions/checkWinner";
import Board from "./board";

const Container = () => {
    const defaultScore =  [{player:"Player X",score:0}, {player:"Player O",score:0}, {player: "Draw", score: 0}]

    const [board,setBoard]  = useState(Array(9).fill(null))
    const [score,setScore] = useState(defaultScore)
    const [round,setRound] = useState(0)
    const input =  round%2 === 0 ? 'X' : 'O'

    const winner = calculateWinner(board)

    useEffect(()=>{
        if(winner ) {
            alert(`Player ${winner} Wins this one ! `)
            // i know that this is bad too much fking code, but i'm too fking lazy to fix this, so i will just leave it like this, since it's just a fun project
            if(winner == "X"){
                let index = score.findIndex(item=>item.player == "Player X")
                score[index].score = score[index].score+1
                setScore(score)
            } else {
                let index = score.findIndex(item=>item.player == "Player O")
                score[index].score = score[index].score+1
                setScore(score)
            }
            setRound(0)
            setBoard(Array(9).fill(null))
        } else if(round == 8){
            let index = score.findIndex(item=>item.player == "Draw")
            score[index].score = score[index].score+1
            setScore(score)
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
    
    const reset = () => {
        setScore(defaultScore)
        setRound(0)
        setBoard(Array(9).fill(null))
        alert('Starting a new game !')
    }
 
    return ( 
        <Board boxs={board} check={check} score={score} reset={reset}></Board>
     );
}
 
export default Container;