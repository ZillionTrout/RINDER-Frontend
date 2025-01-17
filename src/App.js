import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorPage from './views/ErrorPage';
import NotFound from './views/NotFound';
import Signup from './views/auth/Signup';
import Login from './views/auth/Login';
import PrivateView from './views/PrivateView';
import IsPrivate from './components/IsPrivate';
import BulletinDetail from './views/Bulletins/BulletinDetail';
import EditBulletin from './views/Bulletins/EditBulletin';
import NewBulletin from './views/Bulletins/NewBulletin';
import PointedBulletin from './views/Bulletins/PointedBulletin';
import UserBulletins from './views/Bulletins/UserBulletins';
import CardsDungeons from './views/Cards/CardsDungeons';
import CardVampiro from './views/Cards/CardVampiro'
import CardLobo from './views/Cards/CardsLobo'
import CardChangeling from './views/Cards/CardsChangeling'
import CardPathfinder from './views/Cards/CardsPathfinder'
import CardCustom from './views/Cards/CardsCustom'
import Profile from './views/Profile/Profile';
import EditProfile from './views/Profile/EditProfile';
import OtherProfile from './views/Profile/OtherProfile';
import MasterPlayer from './views/Cards/CardsPathfinder';
import FAQs from './views/faqs/FAQs';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<IsPrivate><PrivateView /></IsPrivate>} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/profile/edit/:userId" element={<EditProfile />} />
        <Route path="/other/:userId" element={<OtherProfile />} />
        <Route path='/carddungeons' element={<CardsDungeons />} />
        <Route path='/cardvampiro' element={<CardVampiro />} />
        <Route path='/cardlobo' element={<CardLobo />} />
        <Route path='/cardchangeling' element={<CardChangeling />} />
        <Route path='/cardpathfinder' element={<CardPathfinder />} />
        <Route path='/cardcustom' element={<CardCustom/>} />
        <Route path="/bulletindetail" element={<BulletinDetail />} />
        <Route path="/bulletins/edit/:bulletinId" element={<EditBulletin />} />
        <Route path='/new' element={<NewBulletin />} />
        <Route path="/pointed/user/:userId" element={<PointedBulletin />} />
        <Route path="/bulletins/user/:userId" element={<UserBulletins />} />
        <Route path="/masterplayer" element={<MasterPlayer />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
