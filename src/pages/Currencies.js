// needed everytime you want to link pages
import { Link } from "react-router-dom";
import styles from '../index.css'
function Currencies(props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];
  return (
    <div>
      {/* Maps and displays the coins available */}
      {currencies.map((coin, index)=>{
        const {name, symbol} = coin
        return(
          <Link to={`/Prices/${symbol}`} key={index}><h2>{name}</h2></Link>
        )
      })}
    </div>
  )
}
export default Currencies;