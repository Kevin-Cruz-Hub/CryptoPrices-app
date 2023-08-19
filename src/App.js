// first import the Routes component
// Routes: is going to be wrapping around the different routes
// Route: is going to be each seperate component
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
import Navbar from './components/Navbar'
import './App.css';

// always turn off your server before installing something in a project
// check your package.json to see if it was installed
function App() {


  return (
    <div className="App">
      {/* Eveything outside the Routes wull be on every component that is rendered, will always show*/}
      <Navbar/>
      <Routes>
        {/* path: is a string of the path you want to create */}
        {/* element: is the component you want to show with that file path */}
        {/* /: is the home page/ beginning route or root route of your website, always going to be there */}
        <Route path='/' element={<Main/>}/>
        <Route path='/Currencies' element={<Currencies/>}/>
        {/* creating a dynamic route, the name can anything that you choose for your application */}
        {/* in browser: renderedroute -> match -> symbol */}
        {/* :symbol is a parameter that can be changed but must have a (:) in the beginning */}
        <Route path='/Prices/:symbol' element={<Price/>}/>
      </Routes>
    </div>
  );
}

export default App;
