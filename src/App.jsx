import { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import { HomePage, CountryPage } from './components/pages';

function App() {
  const [changeTheme, setChangeTheme] = useState(true);
  const handleChangeTheme = (theme) => {
    setChangeTheme(theme);
  }
  return (
    <div className="App">
      <div className={changeTheme ? 'countries' : 'countries dark'}>
        <Navbar onChangeTheme={handleChangeTheme} />
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
