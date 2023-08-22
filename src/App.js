// App.js
import React from 'react';
import Header from './components/header'
import Footer from '../src/components/Footer'
import './index.css';
import LargeImageSection from './components/large-image-section/large-image.section';
function App() {
  return (
    <div className="app">
      <header/>
      <footer/>
      <LargeImageSection/>
    </div>
  );
}

export default App;
