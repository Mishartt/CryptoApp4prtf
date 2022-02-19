import { useSelector } from "react-redux"
import CryptoItem from "./CryptoItem";
import React from "react";

const CryptoList = () => {

    const coins = useSelector((state:any) => state.crypto.sortedCrypto)
    console.log(coins);
    
    return(
        <div >
            {coins.map((coin:any) => 
                <CryptoItem key={coin.id} coin={coin}/>
                )}
        </div>
    )
}

export default CryptoList