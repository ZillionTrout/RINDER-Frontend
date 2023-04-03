import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './views/Home';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';
import NotFound from './views/NotFound';
import Signup from './views/auth/Signup';
import Login from './views/auth/Login';
import PrivateView from './views/PrivateView';
import IsPrivate from './components/IsPrivate';
import BulletinDetail from './views/Bulletins/BulletinDetail';
import EditBulletin from './views/Bulletins/EditBulletin';
import ListBulletin from './views/Bulletins/ListBulletin';
import NewBulletin from './views/Bulletins/NewBulletin';
import PointedBulletin from './views/Bulletins/PointedBulletin';
import UserBulletins from './views/Bulletins/UserBulletins';
import Mpcreate from './views/MessagePrivate/Mpcreate';
import Yoursmp from './views/MessagePrivate/Yoursmp';
import Profile from './views/Profile/Profile';
import EditProfile from './views/Profile/EditProfile';
import OtherProfile from './views/Profile/OtherProfile';
import MasterPlayer from './views/Search/MasterPLayer';
import SearchCampaign from './views/Search/SearchCampaign';
import Searchname from './views/Search/Searchname';
import Tutorial from './views/Tutorial/Tutorial';

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
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/otherprofile" element={<OtherProfile />} />
        <Route path="/bulletindetail" element={<BulletinDetail />} />
        <Route path="/editbulletin" element={<EditBulletin />} />
        <Route path="/bulletins" element={<ListBulletin />} />
        <Route path='/newbulletin' element={<NewBulletin />} />
        <Route path="/pointedbulletin" element={<PointedBulletin />} />
        <Route path="/userbulletins" element={<UserBulletins />} />
        <Route path="/mpcreate" element={<Mpcreate />} />
        <Route path="/yoursmp" element={<Yoursmp />}/>
        <Route path="/searchname" element={<Searchname />} />
        <Route path="/searchcampaign" element={<SearchCampaign />} />
        <Route path="/masterplayer" element={<MasterPlayer />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
