// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import BestSellersProducts from './Pages/BestSellers/BestSellers'
import ProductPage from './Pages/Product/Product';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route
            path="/bestsellers"
            element={<BestSellersProducts />} />
          <Route path='/product' element={<ProductPage searchTerm={searchTerm} />}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
