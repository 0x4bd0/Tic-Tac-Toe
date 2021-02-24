import Box from "./box"

const Board = ({boxs,check}) => {
    return ( 
        <div className="board">
            {
                boxs.map((item,index)=>(
                    <Box  key={index} value={item}  check={check} index={index}></Box>
                ))
            }
        </div>
     );
}
 
export default Board;