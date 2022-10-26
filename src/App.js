import './App.css';
import AdvancedStatistics from './components/layout/AdvancedStatistics';
import Boost from './components/layout/Boost';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Shorter from './components/layout/Shorter';
import Top from './components/layout/Top';


function App() {
  return <div className="App">
    <Header />
    <Top />
    <Shorter/>
    <AdvancedStatistics/>
    <Boost/>
    <Footer/>
  </div>
}

export default App;