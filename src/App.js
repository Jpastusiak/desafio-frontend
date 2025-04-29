import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Checkout from './Checkout';
import SuccessPayment from './SuccessPayment';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Checkout page as the default route */}
          <Route path="/checkout" element={<Checkout />} />
          {/* Success Payment page */}
          <Route path="/success" element={<SuccessPayment />} />
          {/* Redirect to /checkout if no route matches */}
          <Route path="/" element={<Navigate to="/checkout" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
