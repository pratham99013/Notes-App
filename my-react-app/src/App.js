import logo from './logo.svg';
import './App.css';
import Header from './components/Header.';
import NotelistPage from './pages/NotelistPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notepage from './pages/Notepage';


function App() {
  return (
    <Router>
    <div className="container dark">
      <div className="app">
    <Header></Header>
     <Routes>
     <Route path= "/"  element={<NotelistPage></NotelistPage>}></Route>
     <Route path = "/note/:id"  element = {<Notepage></Notepage>}></Route>
     </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
