import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books/Books';
import Nav from './components/Nav/Nav';
import Categories from './pages/Categories/Categories';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </>
  );
}

export default App;
