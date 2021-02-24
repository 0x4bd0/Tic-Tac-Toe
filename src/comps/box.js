
const Box = ({value,index,check}) => {

    const styly = value ?  `box ${value}` : 'box'
    
    return ( 
        <button className={styly} onClick={()=>{check(index)}} disabled={value?true:false}>
              {value}
        </button>
     );

}
 
export default Box;