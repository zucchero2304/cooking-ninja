import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
