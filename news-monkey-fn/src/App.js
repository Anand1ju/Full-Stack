import React, { useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  
  const [progress, setProgress] = useState(0)
  
  
  
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
           height = {3}
           color='#f11946'
           progress={progress}
         
           />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={setProgress}  pageSize={9} key="general" country="in" category="general" />
              }
            />
            <Route
              path="/business"
              element={
                <News setProgress={setProgress} 
                  pageSize={9}
                  key="business"
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress} 
                  pageSize={9}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress={setProgress} 
                  pageSize={9}
                  key="health"
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress={setProgress} 
                  pageSize={9}
                  key="science"
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress={setProgress}
                  pageSize={9}
                  key="sports"
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress={setProgress}  
                  pageSize={9}
                  key="technology"
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
export default App;
