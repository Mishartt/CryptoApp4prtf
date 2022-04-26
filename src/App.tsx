import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoList from './Components/CryptoList';
import Selected from './Components/Selected';
import { fetchCrypto } from './store/asncFn/cryptoFn';
import { cryptoActionTypes, ICryptoState } from './types/cryptoTypes';
import Converter from './Components/Converter';

function App() {
  const dispatch = useDispatch()
  const cryptoState = useSelector((state:any) => state.crypto)
  
  useEffect(() => {
    dispatch(fetchCrypto())
    
  },[])
  

  // if(cryptoState.isLoading){
      
  //   return (
  //     <div style={{width:'95%',height:'90vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
  //         <div className='loader'></div>
  //     </div>)
  // }
  

  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:"center",minHeight:'100vh'}} className="App">
            <div className="cryptoContainer" style={{minHeight:'35px'}}>                            
                  <Selected/>
                 
                  {
                    cryptoState.converter ?
                    <CryptoList/>
                    :
                    <Converter/>
                  }
            </div>
    </div>
  );
}

export default App;
