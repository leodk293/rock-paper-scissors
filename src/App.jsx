import Main from "./MainApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
