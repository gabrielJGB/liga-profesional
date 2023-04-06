import { DataProvider } from '../context/DataContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "../pages/Layout";
import MainPage from '../pages/MainPage'
import NoPage from "../pages/NoPage";
import Club from '../pages/Club';

import './App.css'

function App() {

  return (

    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route  path="/club" element={<Club />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </DataProvider>

  )
}

export default App
