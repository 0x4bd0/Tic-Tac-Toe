import Box from "./box"

const Board = ({boxs,check,score,reset}) => {
    return ( 
        <div className="board-container">
            <h1>Tic Tac Toe Game</h1>
            <div className="score">
                {
                    score.map((item,i)=>(
                        <p key={i}> {`  ${item.player } :  ${item.score}`  }  </p>
                    ))
                }
            </div>
            <div className="board">
            {
                boxs.map((item,index)=>(
                    <Box  key={index} value={item}  check={check} index={index}></Box>
                ))
            }
        </div>
        <button className="resetBtn" onClick={reset}>Reset</button>
        </div>

     );
}
 
export default Board;