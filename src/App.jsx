import { Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import Items from "./pages/items/items"
import Contact from "./pages/contact/contact"
import AboutUs from "./pages/about/about"
import Profile from "./pages/profile/profile"
import Details from "./pages/details/details"
import './App.css'

function App() {
  return (
    <>
      <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Items />} />          
            <Route path="/items" element={<Items />} />
            <Route path="/details/:id" element={<Details />} />            
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />  
            <Route path="/about" element={<AboutUs />} />         
          </Routes>
        </main>
      </>
    );
  }        

export default App;
