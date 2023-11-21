import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth"))

  return (
    <div className="App">
  <Header setIsAuth={setIsAuth} isAuth={isAuth}></Header>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />}></Route>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
<Footer></Footer>
    </div>
  );
}

export default App;
