import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import House from "./routes/House"
import Contact from './routes/Contact'
import Header from "./components/Header";

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<House/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
