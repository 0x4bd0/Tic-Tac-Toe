import Box from "./box"

const Board = ({boxs,check}) => {
    return ( 
        <div className="board">
            {
                boxs.map((item,index)=>(
                    <Box  key={index} value={item}  onClick={()=>{check(index)}}></Box>
                ))
            }
        </div>
     );
}
 
export default Board;