import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ICoin, ICoinn } from "../types/cryptoTypes";
const reverseImg =  require("../img/reverse.png");


const Converter = () => {

    const cryptoState = useSelector((state:any) =>state.crypto);
    const [rotateStatus,setRotateStatus] = useState(false)
    const [input1,setInput1]:any = useState('');
    const [input2,setInput2]:any = useState('')
    const [currency1,setCurrency1] = useState(0)
    const [currency2,setCurrency2] = useState(1)


    const rotate = () => {
        setRotateStatus(!rotateStatus);        
    }

    

    // console.log(cryptoState);
    
    const changing1Value = (val:any) => {
        if(currency1 == 0){
            setCurrency1(cryptoState.crypto[0].market_data.price_usd)
        }
        setInput1(val)
        setInput2((currency1 / currency2 * val).toFixed(2))
    }

   useEffect(() =>{
    setInput2((currency1 / currency2 * input1).toFixed(2))
   },[currency1,currency2])
   

    return(
        <div className="converter__container">
            <div className="converter">
                <div className="converter__field">
                    <input value={input1} onChange={e => changing1Value(e.target.value)} placeholder="100" type="number" />
                    <select onChange={e => setCurrency1(Number(e.target.value))} name="first__crypto" id="">
                        {cryptoState.crypto.map((cr:ICoinn) =>
                            <option key={cr.symbol} value={cr.market_data.price_usd}>{cr.symbol}</option>
                            )}
                            k
                    </select>
                </div>
                    <img onClick={rotate} style={{transform:rotateStatus ? 'rotate(180deg)' : ''}} src={reverseImg} alt="" />
                <div className="converter__field">
                    <select defaultValue="USD" onChange={e => setCurrency2(Number(e.target.value))} name="first__crypto" id="">
                        <option value="USD">USD</option>
                        {cryptoState.crypto.map((cr:ICoinn) => 
                            <option key={cr.symbol} value={cr.market_data.price_usd}>{cr.symbol}</option>
                            )}
                    </select>
                    <input  value={input2} onChange={e => setInput2(e.target.value)} placeholder="100" type="number" />   
                </div>
            </div>
        </div>
    )
}


export default Converter