
//suspense api , render loading... till the component is not fetched from the backend..


import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { lazy, Suspense } from "react";
const Landing = lazy(() => import('./components/Landing'));
const Dashboard = lazy(() => import("./components/Dashboard")); 

function App() {

  return (
    <div>

    <BrowserRouter>
    <Appbar></Appbar>
    <Routes>
      <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
      <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
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