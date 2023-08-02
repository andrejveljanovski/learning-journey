import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { ArtistsList } from './Components/Artist/ArtistList';
import { ArtistPage } from './Components/Artist/ArtistPage';
import { AlbumPage } from './Components/Albums/AlbumPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ArtistsList />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/artist/:id/:albumID" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
