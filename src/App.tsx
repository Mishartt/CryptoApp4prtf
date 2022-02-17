import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoList from './Components/CryptoList';
import Selected from './Components/Selected';
import { fetchCrypto } from './store/asncFn/cryptoFn';
import { ICryptoState } from './types/cryptoTypes';



function App() {
  const dispatch = useDispatch()
  const cryptoState = useSelector((state:any) => state.crypto)

  useEffect(() => {
    dispatch(fetchCrypto())
  },[])
  
  const log = () => {
    console.log(cryptoState);
    
  }

  if(cryptoState.isLoading){
    return  <div style={{position:'absolute',left:'45%',top:'40vh'}} className='loader'></div>
  }
  

  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:"center",paddingTop:'25vh',minHeight:'100vh'}} className="App">
            <div className="container" style={{width:'45%',minHeight:'35px'}} onClick={() => log()}>                            
                  <Selected/>
                  <CryptoList/>

            </div>
    </div>
  );
}

export default App;
