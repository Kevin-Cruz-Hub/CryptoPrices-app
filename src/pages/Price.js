import { useEffect, useState } from "react";
// useParam: will return the parameter object
import { useParams } from "react-router-dom";
function Price(props) {
  const [coin, setCoin] = useState(null)//its null because we haven't requested any data/ dont have any hardcoded data
  // console.log(coin)

  // API key
  const APIKey = process.env.REACT_APP_COINAPI_KEY;

  // usParams
  const params = useParams();
  // this returns the key which is sybmol (refer to route in App.js) and the value (check map in Currencies.js)
  // in browser: Route.Provider->value->element within
  // console.log(params)

  // Deconstructing the symbol from params and adding it to a url to make a request to the REST API
  const { symbol } = params;
  // This variable is a url that passes the symbol from within the params object and the API key to make a request to the API
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${APIKey}`

  // Data Request/ fetch request, this is by default making a GET request
  const getCoin = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json();
      setCoin(data)
      // console.log(data)
    } catch (e) {
      console.log('ERROR FETCHING DATA\n', e)
    }
  }

  // Runs as soon as the component mounts/shows on the browser
  useEffect(() => {
    getCoin()
  }, [])

  // Shows the fetched data
  const Loaded = () => {
    return (
      <div>
        {/* passing the objects within the state into brackets to show on the screen */}
        <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
        <h2>Per Coin: {coin.rate}</h2>
      </div>
    )
  }
  // Shows a loading message
  const Loading = () => <h1>Loading....</h1>

  // Checks if coin and coin.rate is true, then run the loaded() function else run the loading() function
  return coin && coin.rate ? Loaded() : Loading()
}
export default Price;

/*using the params from react-router-dom to generate a url 
by passing the symbol that we want to get the data from and sending the API key
Making a fetch request 
Then storing the data in useState*/
