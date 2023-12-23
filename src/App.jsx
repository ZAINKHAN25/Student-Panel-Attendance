import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LoadingPage from './pages/LoadingPage/index.jsx';
import Home from './pages/Home/index.jsx';
import ViewClasses from './pages/ViewClasses/index.jsx';
import Login from './pages/Login/index.jsx';
// import ProfilePage from './pages/ProfilePage/index.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching initial data)
    const fetchData = async () => {
      // Simulate a delay (remove this in your actual implementation)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Once data is loaded, set isLoading to false
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isLoading ? (
          <Route path="/*" element={<LoadingPage />} />
        ) : (
          <>
            <Route index element={<Home />} />
            <Route path="/view-your-class" element={<ViewClasses />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/student-profile" element={<ProfilePage />} /> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
