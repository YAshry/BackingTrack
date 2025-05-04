import React, {Fragment} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

// CSS Files
import './StyleSheets/mainstyles.css';
import './StyleSheets/bootstrapstyles.css';

// Component Files
import Cart from './CartFiles/Cart';
import Home from './Homefiles/Home';
import Album from './AlbumFiles/Album';
import Likes from './Libraryfiles/Likes';
import Artist from './ArtistFiles/Artist';
import Albums from './ArtistFiles/Albums';
import Player from './Playerfiles/Player';
import Header from './Headerfiles/Header';
import Singles from './ArtistFiles/Singles';
import Profile from './ProfileFiles/Profile';
import Artists from './Libraryfiles/Artists';
import Login from './LoginAndSignUpFiles/Login';
import Playlist from './PlayListFiles/Playlist';
import Settings from './Settingsfiles/Settings';
import Playlists from './Libraryfiles/Playlists';
import Downloads from './Libraryfiles/Downloads';
import SignUp from './LoginAndSignUpFiles/SignUp';
import ArabicSongs from './Vocalfiles/ArabicSongs';
import Bibliography from './ArtistFiles/Bibliography';
import Purchased from './Libraryfiles/PurchasedItems';
import ArabicMusic from './Instrumentalfiles/ArabicMusic';
import InternationalSongs from './Vocalfiles/InternationalSongs';
import InternationalMusic from './Instrumentalfiles/InternationalMusic';
import UserLibraryCategories from './Libraryfiles/UserLibraryCategories';

const Mainrouter = () => {
    
    const location = useLocation();

    return(
        
        <div className="row pl-2 pr-2 vh-100">
            <div className="col-lg-12 p-0 full_page">

                {
                    location.pathname === "/login" || 
                    location.pathname === "/signup" || 
                    location.pathname === "/artist" || 
                    location.pathname === "/artist/" || 
                    location.pathname === "/artist/albums" ||
                    location.pathname === "/artist/singles" ||
                    location.pathname === "/artist/bibliography" ?
                    <Fragment/>
                    : 
                    <Header/>
                }
                
                <div className={'scrollable'}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>

                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        
                        <Route path="vocal/arabic" element={<ArabicSongs />}/>
                        <Route path="instrumental/arabic" element={<ArabicMusic/>}/>
                        <Route path="vocal/international" element={<InternationalSongs/>}/>
                        <Route path="instrumental/international" element={<InternationalMusic/>}/>
                        
                        <Route path="library" element={<UserLibraryCategories/>}>
                            <Route path="likes" element={<Likes/>}/>
                            <Route path="artists" element={<Artists/>}/>
                            <Route path="purchased" element={<Purchased/>}/>
                            <Route path="downloads" element={<Downloads/>}/>
                            <Route path="playlists" element={<Playlists/>}/>
                        </Route>
                        
                        <Route path="/artist" element={<Artist/>}>
                            <Route path="albums" element={<Albums/>}/>
                            <Route path="singles" element={<Singles/>}/>
                            <Route path="bibliography" element={<Bibliography/>}/>
                        </Route>

                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/album" element={<Album/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/user/playlist/playlistName" element={<Playlist/>}/>
                    </Routes>
                </div>

                {
                    location.pathname === "/login" || location.pathname === "/signup" ? 
                    <Fragment/>
                    : 
                    <Player/>
                }
            </div>
        </div>
    );
};

export default Mainrouter;