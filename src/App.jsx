import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;