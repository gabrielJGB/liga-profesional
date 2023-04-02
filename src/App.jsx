import { DataProvider } from '../context/DataContext'
import MainPage from '../pages/MainPage'
import './App.css'

function App() {



  return (

    <DataProvider>
      <MainPage />
    </DataProvider>

  )
}

export default App
