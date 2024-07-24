import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import About from "./Pages/About"


const App = () => {
  return (
    <div>
      <h1 className="font-bold">HAPPY</h1>
      <BrowserRouter>


      <Routes>

<Route path="/" element={Home} >
</Route>
<Route path="/profile" element={Profile} >
</Route>
<Route path="/sign-in" element={SignIn} >
</Route>
<Route path="/sign-up" element={SignUp} >
</Route>
<Route path="/about" element={About} >


</Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
