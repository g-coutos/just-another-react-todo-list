import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
