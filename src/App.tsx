import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/views/home';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Home></Home>
    </div>
  );
}

export default App;
