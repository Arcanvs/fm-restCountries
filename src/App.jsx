import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import { HomePage, CountryPage } from './components/pages';

function App() {
  return (
    <div className="App">
      <div className="countries">
        <Navbar />
        <div className="countries__body">
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/country/:capital' element={<CountryPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
