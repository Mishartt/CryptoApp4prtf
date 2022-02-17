import { ICoin } from "../types/cryptoTypes";


export const SwitchFn = (symbol:string) => {
    let coinImg;
    switch(symbol){
        case 'BTC':
            coinImg = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=021'
            break;
        case 'ETH':
            coinImg = 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=021'
            break;
        case 'LTC':
            coinImg = 'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=021'
            break;
        case 'DOGE':
            coinImg = 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=021'
            break;
        case 'ADA':
            coinImg = 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=021'
            break;
        case 'AVAX':
            coinImg = 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=021'
            break;
        case 'SOL':
            coinImg = 'https://cryptologos.cc/logos/solana-sol-logo.png?v=021'
            break;
        case 'MANA':
            coinImg = 'https://cryptologos.cc/logos/decentraland-mana-logo.png?v=021'
            break;
        case 'THETA':
            coinImg = 'https://cryptologos.cc/logos/theta-network-theta-logo.png?v=021'
            break;
        case 'SHIB':
            coinImg = 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=021'
            break;
        case 'CRO':
            coinImg = 'https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png?v=021'
            break;
        case 'NEAR':
            coinImg = 'https://cryptologos.cc/logos/near-protocol-near-logo.png?v=021'
            break;
        case 'UNI':
            coinImg = 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=021'
            break;
        case 'TRX':
            coinImg = 'https://cryptologos.cc/logos/tron-trx-logo.png?v=021'
            break;
        
    }

    return coinImg
}