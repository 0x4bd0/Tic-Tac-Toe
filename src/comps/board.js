import Box from "./box"

const Board = ({boxs,check}) => {
    return ( 
        <div className="board">
            {
                boxs.map((item,i)=>{
                    <Box  key={index} value={item}  onClick={()=>{check}}></Box>
                })
            }
        </div>
     );
}
 
export default Board;