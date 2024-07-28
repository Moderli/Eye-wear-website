import Header from "./components/Header.jsx";
import Navbar from "./components/navbar.jsx";
import Products from "./components/products.jsx"


function App() {
  return (
    <>
      <Navbar/>
    <div className="mt-5 w-screen h-auto flex justify-center">
      <Header/>
    </div>
    <div className="mt-20">
      <Products/>
    </div>
    </>
  )
}

export default App;
