import "./css/App.css"
// import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from "./context/MovieContext"
import Favorites from "./pages/Favorites"

function App() {
  return (
    <MovieProvider>
      <NavBar/> 
      <main className='main-content'>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='favorite' element= {<Favorite/>}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
