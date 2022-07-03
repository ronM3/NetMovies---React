import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";


import MoviePage from "./pages/MoviePage";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container fluid className="d-flex movies">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/search/:searchValue" element={<HomePage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
