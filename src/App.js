import logo from './Images/cricpoint.png';
import './style.css';
import Home from "./components/Pages/Home";
import Blogs from "./components/Blogs";
import Page from "./components/Page";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cricket from './components/Categories/Cricket';
import PostLoader from './components/layouts/PostLoader';
import PlayerStats from './Cricket/PlayersStats'
import Players from './Cricket/Players';
import SinglePlayer from './Cricket/SinglePlayer';
import Live from './Cricket/Matches/Live';
import CategoryPost from './components/Categories/CategoryPost';
import Dream11 from './components/Categories/Dream11';
import LiveMatches from './Cricket/Matches/LiveMatches';
import Footer from './components/Footer';
import TermsConditions from '../src/components/Pages/Terms&Conditions'
import Privacy from './components/Pages/Privacy';
import About from './components/Pages/About';
import Series from './Cricket/Series/Series'
import Ipl from './components/Categories/Ipl';
import Wpl from './components/Categories/Wpl';
import Contact from './components/Pages/Contact';
import Sitemap from './components/Sitemap/Sitemap';
import Pagenotfound from './components/Common/Pagenotfound';
import Singleplayerstas from './Cricket/Singleplayerstas';
import Scorecardpage from './Cricket/Scorecards/Scorecardpage';
import MostRuns from './Cricket/Mostruns/MostRuns';




function App() {


  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/page/:id" element={<Page />} />
        <Route exact path="/cricket" element={<Cricket />} />
        <Route exact path="/players" element={<Players />} />
        <Route exact path="/player/:id" element={<Singleplayerstas />} />
        <Route exact path="/live-score" element={<LiveMatches />} />
        <Route exact path="/post/:slug" element={<CategoryPost />} />
        <Route exact path="/dream11-prediction" element={<Dream11 />} />
        <Route exact path='/terms-and-conditions' element={<TermsConditions />} />
        <Route exact path='/Privacy-Policy' element={<Privacy />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path="/series" element={<Series />} />
        <Route exact path="/indian-premier-league" element={<Ipl />} />
        <Route exact path="/womens-premier-league" element={<Wpl />} />
        <Route exact path="/sitemap" element={<Sitemap />} />
        <Route exact path="/scorecard/:id" element={<Scorecardpage />} />

        <Route path="*" element={<Pagenotfound />} />
        <Route path="mostruns" element={<MostRuns/>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
