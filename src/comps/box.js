
const Box = ({value,check}) => {

    const styly = value ?  `box ${value}` : 'box'
    
    return ( 
        <button className={styly} onClick={check}>
              {value}
        </button>
     );

}
 
export default Box;