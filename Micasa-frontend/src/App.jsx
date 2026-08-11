
import {BrowserRouter, Routes, Route} from "react-router"
import { Estatepage } from './Pages/Estatepage'
import { Frontpage } from './Pages/Frontpage'
import { EstateDetailpage } from './Pages/EstateDetailspage'
import { Loginpage } from './Pages/Loginpage'
import { SearchResultspage } from './Pages/SearchResultspage'
import { Contactpage } from './Pages/Contaktpage'
import { MainLayout } from './layout/MainLayout'



function App() {

  return (
    <BrowserRouter>
    
     <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" index element={<Frontpage/>} />
        <Route path="/Estates" element={<Estatepage/>} />
        <Route path="/Estates/:id" element={<EstateDetailpage />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Search" element={<SearchResultspage />} />
        <Route path="/Contact" element={<Contactpage />} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
