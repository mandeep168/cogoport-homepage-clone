import './App.css';

import Blogs from './components/Blogs';
import BottomFooter from './components/BottomFooter';
import IndustriesServed from './components/IndustriesServed';
import NavBarTab from './components/NavBarTab';
import Notification from './components/Notification';
import OurProducts from './components/OurProducts';
import PortsContainer from './components/PortsContainer';
import SupplyChainReadyBox from './components/SupplyChainReadyBox';
import TrustedBy from './components/TrustedBy';
import GetStarted from './components/GetStarted';
import WhatsappCard from './components/WhatsappCard';
import SubscribeNewsletterAndQuickLinks from './components/SubscribeNewsletterAndQuickLinks';
import HowItWorks from './components/HowItWorks';
import NavBar from './components/NavBar';
import NavBarOnTheSide from './components/NavBarOnTheSide';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <div className="App">
      <WhatsappCard />
      <Notification />
      <TopNavBar />
      <NavBar />
      <OurProducts />
      <TrustedBy />
      <SupplyChainReadyBox />
      <HowItWorks />
      <IndustriesServed />
      <GetStarted />
      <Blogs />
      <SubscribeNewsletterAndQuickLinks />
      <PortsContainer /> 
      <NavBarOnTheSide />
      <BottomFooter /> 
    </div>
  );
}



export default App;
