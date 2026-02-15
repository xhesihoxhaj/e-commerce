// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import BestSellersProducts from './components/BestSellers/BestSellers'
import ProductPage from './components/Product/Product';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route
            path="/bestsellers"
            element={<BestSellersProducts />} />
          <Route path='/product' element={<ProductPage />}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
