
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'; 

function App() {

  return (
    <div>

    <BrowserRouter>
    <Appbar></Appbar>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Landing />} />
    </Routes>
    
    </BrowserRouter>
    </div>
  )

}

function Appbar() {
  const navigate = useNavigate();
  return <div>
          <button onClick={() => {
            navigate("/");
          }}>Landing page
          </button>
          <button onClick={() => {
            navigate("/dashboard");
          }}>Dashboard page
          </button>
        </div>
}
export default App